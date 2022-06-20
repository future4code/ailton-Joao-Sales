import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

//estilização conatiner principal
const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  box-sizing: border-box;
  padding: 0;
  margin:0;
  @media screen and (max-width:800px) {
    width: 100vw;
  }
`;
//estilização header
const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 6%;
  background-color: #3cb371;
  color: #dcdcdc;
  @media screen and (max-width:800px) {
    width: 100%;
  }
`;
//estilização main container que irá mostrar mensagens 
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* border: 1px solid black; */
  height: 100%;
  background-color: #e0ffff;
  align-items: flex-end;
  overflow: auto;
  @media screen and (max-width:800px) {
    width: 100%;
  }
`;
//estilização area que mostrará mensagens
const MensageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 5%;
  background-color: #e0ffff;
  width: 50%;
  @media screen and (max-width:800px) {
    width: 100%;
  }
`;
//estilização card de mensagem
const UserBaloon = styled.div`
  /* flex-direction: column; */
  color: white;
  box-shadow: 1.5px 1.8px darkgray;
  background-color: darkcyan;
  word-wrap: break-word;
  word-break: break-all;
  padding: 0.6em 0.4em;
  margin: 2px 3px;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  width: fit-content;
  max-width: 60%;
`;

const DadUserBaloon = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
`

const WhiteBaloon = styled.div`
  /* flex-direction: column; */
  color: black;
  box-shadow: 1.5px 1.8px darkgray;
  background-color: white;
  word-wrap: break-word;
  word-break: break-all;
  padding: 0.6em 0.4em;
  margin: 2px 3px;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
`;

const DadWhiteBaloon = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
`

//estilização de input que irá receber as mensagens e exibir no container principal
//parte nome do usuario
const BarraMsg = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  background-color: rgb(105, 105, 105);
  border: none;
  margin-left: 1px;
  color: #d3d3d3;
  ::placeholder {
    color: #d3d3d3;
  }
  border-radius: 10px;
  margin:2px;
`;
//estilização de input que irá receber as mensagens e exibir no container principal
//parte mensagem
const BarraUser = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  background-color: rgb(105, 105, 105);
  border: none;
  color: #d3d3d3;
  ::placeholder {
    color: #d3d3d3;
  }
  border-radius: 10px;
  margin:2px;
`;
//estilização do botão que permitirá enviar as mensagens
const Butao = styled.button`
  width: 20%;
  background-color: #3cb371;
  color: #dcdcdc;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  margin:2px;
`;

class App extends React.Component {
  //estado que armazenar o array vazio com as mensagens
  state = {
    mensagem: [],
    //valor do input que guardará nome do usuario
    valorInputUser: "",
    //valor do input que guardará a mensagem por ele digitada
    valorInputMensagem: "",
  };

  //função que armazena mensagem e salva

  adicionaMensagem = () => {
    if(this.state.valorInputUser !== "" ) {
      if(this.state.valorInputMensagem !== "") {
        const novaMensagem = {
          user: this.state.valorInputUser,
          mensage: this.state.valorInputMensagem,
        };
        const novasMensagens = [...this.state.mensagem, novaMensagem];
        this.setState({ mensagem: novasMensagens });
        this.setState({ valorInputMensagem: "" });
      }
    }

  };
  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  removeMensagem = (id) => {
    if (window.confirm("você deseja apagar a mensagem?")) {
      const novasMensagens = this.state.mensagem.filter((array, index) => {
        return id !== index
      })
      this.setState({ mensagem: novasMensagens })
    }
  }

  render() {

    const mensagens = this.state.mensagem.map((array, index) => {
      if (array.user.toLowerCase() === 'eu') {
        return (
          <DadUserBaloon hey={index}>
            <UserBaloon onDoubleClick={() => this.removeMensagem(index)}
              return
            >
              {array.mensage}
            </UserBaloon>
          </DadUserBaloon>
        )
      } return (
        <DadWhiteBaloon key={index}>
          <WhiteBaloon onDoubleClick={() => this.removeMensagem(index)}>
            <strong>{array.user}</strong>
            <p>{array.mensage}</p>
          </WhiteBaloon>
        </DadWhiteBaloon>
      )
    });
    return (
      <CentralContainer>
        <HeadContainer>
          <h2>WhatsLab</h2>
        </HeadContainer>
        <MainContainer>{mensagens}</MainContainer>
        <MensageContainer>
          <BarraUser
            placeholder="User"
            value={this.state.valorInputUser}
            onChange={this.onChangeInputUser}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.setState({ valorInputUser: e.target.value })
                this.adicionaMensagem()
              }
            }}
            type="text"
          />
          <BarraMsg
            placeholder="Mensagem"
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.setState({ valorInputMensagem: e.target.value })
                this.adicionaMensagem()
              }
            }}
            type="text"
          />

          <Butao onClick={this.adicionaMensagem}>
            enviar
          </Butao>
        </MensageContainer>
      </CentralContainer>
    );
  }
}

export default App;
