import React, { Component } from 'react'
import BarraLateral from './components/BarraLateral'
import Center from './components/Center'
import TocaMusica from './components/TocaMusica'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
background-color: grey;
`
const MainCont = styled.div`
display: flex;
flex-direction: row;
height: 90vh;
width: 100%;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <MainCont>
          <BarraLateral />
          <Center />
        </MainCont>
          <TocaMusica />
      </Container>
    )
  }
}
