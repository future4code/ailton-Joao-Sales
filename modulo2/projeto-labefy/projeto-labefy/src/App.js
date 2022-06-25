import React, { Component } from 'react'
import BarraLateral from './components/BarraLateral'
import Center from './components/Center'
import TocaMusica from './components/TocaMusica'
import styled from 'styled-components'
import axios from 'axios'

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

const autorizado = { headers: { Authorization: "joao-sales-ailton" } }

export default class App extends Component {
  state = {
    playlists: [],
    inputPlaylistName: "",
    tracks: [],
    inputMusicName: "",
    inputArtistName: "",
    InputURL: ""
  }

  componentDidMount() {
    this.allPlaylists()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.playlists !== this.state.playlists) {
  //     return () => this.allPlaylists()
  //   }
  // }

  onChangeInputPlaylist = (e) => {
    this.setState({ inputPlaylistName: e.target.value })
  }

  allPlaylists = () => {
    const url = ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")
    axios.get(url, autorizado)
      .then((res) => {
        console.log('playlists', res.data)
        this.setState({ playlists: res.data.result.list })
      }).catch((err) => {
        console.log('deu ruim', err.res)
      })
  }

  createPlaylist = () => {
    const url = ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")
    const body = {
      name: this.state.inputPlaylistName
    }

    axios.post(url, body, autorizado)
      .then((res) => {
        console.log('dshb', res.data)
        this.allPlaylists()
      }).catch((err) => {
        console.log(err)
      })
  }

  deletePlaylist = (id) => {
    const url = (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`)
    if (window.confirm('Você deseja apagar essa playlist?')) {
      axios.delete(url, autorizado)
      const arrayNovo = this.state.playlists.filter((item) => {
        return item.id !== id
      })
      this.setState({ playlists: arrayNovo })
    }
  }

  addTrackToPlaylist = () => {
    //passar parametros a função
    const url = (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/ca64af11-8470-4b52-882d-c88998aca452/tracks`)
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtistName,
      url: this.state.InputURL
    }
    axios.post(url, body, autorizado)
      .then((res) => {
        console.log('teste', res.data)
        this.allPlaylists()
      }).catch((err) => {
        console.log(err.mensage)
      })
  }




render() {
  return (
    <Container>
      <MainCont>
        <BarraLateral
          playlists={this.state.playlists}
          inputPlaylistName={this.state.inputPlaylistName}
          onChangeInputPlaylist={this.onChangeInputPlaylist}
          createPlaylist={this.createPlaylist}
          deletePlaylist={this.deletePlaylist}
        />
        <Center
        { ...() => this.addTrackToPlaylist() }
        />
      </MainCont>
      <TocaMusica />
    </Container>
  )
}
}
