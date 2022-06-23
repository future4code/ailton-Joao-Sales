import React, { Component } from 'react'
import {  ContainerPai, ContainerMain, ContainerQuadradinScroll, InButton, DivLado, InButtonCinza } from '../styled'
import axios from 'axios'
import styled from 'styled-components'

const Espacamento = styled.div`
width: 420px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
gap:10px;
box-shadow: 2px 3px 2px 3px grey;
border-radius: 8px;
margin: 16px;
`


export default class TelaLista extends Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUsers()
    }



    getAllUsers = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
                headers: {
                    Authorization: 'joao-sales-ailton'
                }
            })
            console.log('sdcbj', response.data)
            this.setState({ usuarios: response.data })
        } catch (error) {
            console.log(error.response)
        }
    }

    deleteUser = (id) => {
        if (window.confirm("você deseja apagar esse usuario?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                {
                    headers: {
                        Authorization: "joao-sales-ailton"
                    }
                })
            const arrayNovo = this.state.usuarios.filter((item) => {
                return item.id !== id
            })
            this.setState({ usuarios: arrayNovo })
        }
    }

    
    render() {


        return (
            <ContainerPai>

                <ContainerMain>
                    <ContainerQuadradinScroll>
                        <div>
                            {this.state.usuarios?.map((user) => {
                                return <Espacamento key={user.id}> <strong>{user.name}</strong>
                                    <InButtonCinza onClick={() => this.deleteUser(user.id)}>Vai de base</InButtonCinza>
                                </Espacamento>
                            })}
                        </div>
                        <DivLado>
                            <InButton onClick={this.props.telaInicio}>Criar Usuario</InButton>
                        </DivLado>
                    </ContainerQuadradinScroll>
                </ContainerMain>

            </ContainerPai>
        )
    }
}
