import React, { Component } from 'react'
import TelaInicial from './components/TelaInicial'
import TelaLista from './components/TelaLista'
import axios from 'axios'

export default class App extends Component {
  state = {
    tela: "telaInicial",
    usuarios:[]
  }

  telaLista = () => {
    this.setState({
      tela: "telaLista"
    })
  };

  telaInicio = () => {
    this.setState({
      tela: "telaInicial"
    })
  }

  componentDidMount () {
    
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers: {
                Authorization: "joao-sales-ailton"
            }
        }
    )
        .then((response) => {
            console.log(response.data)
            this.setState({ usuarios: response.data })
        })
        .catch((error) => {
            console.log(error.message)
        })
}
  
  escolheTela = () => {
    switch (this.state.tela) {
      case "telaInicial":
        return <TelaInicial getAllUsers={this.getAllUsers}  telaLista={this.telaLista} />
        break;
      case "telaLista":
        return <TelaLista telaInicio={this.telaInicio}
        renderizaLista={this.state.usuarios}
        getAllUsers={this.getAllUsers} />
    }
  }

  render() {
    return (
      <div>{this.escolheTela()}</div>
    )
  }
}


