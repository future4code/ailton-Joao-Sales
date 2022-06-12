import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;
const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 10%;
  background-color: #3cb371;
  color: #dcdcdc;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  height: 100%;
  background-color: #e0ffff;
  
  align-items: flex-end;
  overflow: auto;
`;
const MensageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 5%;
  background-color: darkgreen;
  width: 50%;
`;
const TesteP = styled.div`
  flex-direction: column;
  color: white;
  box-shadow: 1.5px 1.8px darkgray;
  padding: 2px 5px;
  background-color: darkcyan;
  border-radius: 10px;
  margin: 5px;
  word-wrap: break-word;
  word-break: break-all;
`;
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
`;
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
`;
const Butao = styled.button`
  width: 20%;
  background-color: #3cb371;
  color: #dcdcdc;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;

class App extends React.Component {
  state = {
    mensagem: [],
    valorInputUser: "",
    valorInputMensagem: "",
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      user: this.state.valorInputUser,
      mensage: this.state.valorInputMensagem,
    };
    const novasMensagens = [...this.state.mensagem, novaMensagem];
    this.setState({ mensagem: novasMensagens });
    this.setState({ valorInputUser: "" });
    this.setState({ valorInputMensagem: "" });
  };
  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const mensagens = this.state.mensagem.map((array, index) => {
      return (
        <TesteP key={index}>
          <strong>{array.user}</strong>
          <p>{array.mensage}</p>
        </TesteP>
      );
    });

    return (
      <CentralContainer>
        <HeadContainer>
          <h2>UATIZAPÍ-ZAAPÍ</h2>
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
             this.setState({ valorInputMensagem: e.target.value})
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
