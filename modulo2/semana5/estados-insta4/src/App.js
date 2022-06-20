import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Butao =styled.button`

`

class App extends React.Component {
  state = {
    instaPosts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Gabriel",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151",
      },
      {
        nomeUsuario: "iri",
        fotoUsuario: "https://picsum.photos/60/50",
        fotoPost: "https://picsum.photos/200/150",
      },
    ],
    valorInputNome:"",
    valorInputFotoUser:"",
    valorInputFotoPost:""
  };
    adicionaPost = () => {
      const novoPost = {
        nomeUsuario: this.state.valorInputNome,
        fotoUsuario: this.state.valorInputFotoUser,
        fotoPost: this.state.valorInputFotoPost
      }
      const novosPosts = [...this.state.instaPosts, novoPost];

      this.setState({instaPosts: novosPosts})
      this.setState({valorInputNome: ""})
      this.setState({valorInputFotoUser: ""})
      this.setState({valorInputFotoPost: ""})
    }

    onChangeInputNome = (event) => {
      this.setState({valorInputNome: event.target.value});

    }
    onChangeInputFotoUser = (event) => {
      this.setState({valorInputFotoUser: event.target.value});
    }
    onChangeInputFotoPost = (event) => {
      this.setState({valorInputFotoPost: event.target.value});
    }

  render() {
    const listaDePosts = this.state.instaPosts.map((postes, index) => {
      return (
        <Post key={index}
         nomeUsuario= {postes.nomeUsuario}
         fotoUsuario= {postes.fotoUsuario}
         fotoPost= {postes.fotoPost}
        />
        
      );
    });
    return (
      <MainContainer>
        {listaDePosts}
        <input
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={'nome usuario'}
        />
        <input
        value={this.state.valorInputFotoUser}
        onChange={this.onChangeInputFotoUser}
        placeholder={'Foto user'}
        />
        <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={'Foto post'}
        />
        <button onClick={this.adicionaPost}>Adicionar Post</button>
      </MainContainer>
    );
  }
}

export default App;
