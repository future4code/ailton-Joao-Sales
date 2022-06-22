import React, { Component } from 'react'
import { Containerheader, ContainerPai, ContainerMain, ContainerQuadradinScroll ,  InButton, DivLado  } from '../styled'
import axios from 'axios'

export default class TelaLista extends Component {
    state = {
        usuarios:[]
    }

    componentDidMount() {
        this.getAllUsers()
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

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
            headers: {
                Authorization: "joao-sales-ailton"
            }
        }
        ) 
        const arrayNovo = this.state.usuarios.filter((item) => {
            return item.id !== id
    })
    this.setState({usuarios: arrayNovo})
    }



    render() {


        return (
            <ContainerPai>
            
                <ContainerMain>
                    <ContainerQuadradinScroll>
                        <div>
                            {this.state.usuarios?.map((user) => {
                               return <div key={user.id}>{user.name}
                               <InButton onClick={() => this.deleteUser(user.id)}>Vai de base</InButton>
                               </div>
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
