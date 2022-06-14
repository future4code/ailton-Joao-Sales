import React, { Component } from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'

export default class App extends Component {
  state = {
    tela: 1
  }
  renderScreen = () => {
    switch (this.state.tela) {
      case 1:
        return <Etapa1 />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;
      case 4:
        return <EtapaFinal />
        break;
    }
  }
  pulaEtapa = () => {
    this.setState({tela:this.state.tela + 1})
  }

    render() {
      return (
        <div>
          {this.renderScreen()}
          {this.state.tela === 4 || <button onClick={this.pulaEtapa}>Proxima Etapa</button> }
          
        </div>
      )
    }
  }

