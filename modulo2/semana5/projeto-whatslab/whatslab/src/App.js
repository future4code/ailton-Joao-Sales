import React from "react";
import styled from "styled-components";
// import SecaoBody from './components/SecaoBody/SecaoBody';

const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; 
  background-color: black;
`
const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 50px;
  background-color: orange;
  color: white;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  height: 500px;
  background-color: gray;
  justify-content: flex-end;
  align-items: flex-end;
`
const MensageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 30px;
  background-color: orange;
`
const TesteP = styled.p`
  flex-direction: column;
  color: white;
  box-shadow: 1.5px 1.8px darkgray;
  padding: 2px 10px;
  background-color:darkorange;
  border-radius: 10px;
  margin: 5px;
`



function App() {
  return (
    <CentralContainer >
     <HeadContainer>
      <h2>whats lab</h2>
     </HeadContainer>
     <MainContainer>
    <TesteP>teste</TesteP>
    <TesteP>teste dois</TesteP>
    <TesteP>teste tres</TesteP>
    <TesteP>o rato roeu a roupa do rei de roma</TesteP>
     </MainContainer>
     <MensageContainer>

     </MensageContainer>
    </CentralContainer>
  );
}

export default App;
