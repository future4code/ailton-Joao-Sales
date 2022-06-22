import React, { Component } from 'react'
import axios from 'axios'
import { Containerheader, ContainerPai, ContainerMain, ContainerQuadradin, ContainerFooter, Inputo, InButton } from '../styled'

export default class TelaInicial extends Component {

    state = {
        inputNome: "",
        inputEmail: ""
    }

    onChangeInputNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }
    onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    createUser = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body, {
            headers: {
                Authorization: "joao-sales-ailton"
            }
        }
        )
            .then((response) => {
                console.log(response)
                this.props.getAllUsers()
                alert('usuario cadastrado!')
            })
            .catch((error) => {
                console.log(error.message)
                alert('usuario não cadastrado')
            })
    }

    render() {
      
        return (
            <ContainerPai>
                <ContainerMain>
                    <ContainerQuadradin>
                        <h1>Crie um Usuario</h1>
                        <label>
                            <h3>Nome</h3>
                            <Inputo value={this.state.inputNome} onChange={this.onChangeInputNome} placeholder={'digite seu nome'} />
                        </label>
                        <label>
                            <h3>E-mail</h3>
                            <Inputo value={this.state.inputEmail} onChange={this.onChangeInputEmail} placeholder={'digite seu e-mail'} />
                        </label>
                        <div>
                            <InButton onClick={this.createUser} >Cadastrar Usuario</InButton>
                        </div>
                        <div>
                        <InButton onClick={this.props.telaLista}>Lista de usuarios</InButton>
                        </div>
                    </ContainerQuadradin>
                </ContainerMain>

            
            </ContainerPai>
        )
    }
}