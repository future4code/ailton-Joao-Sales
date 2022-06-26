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
background-color: darkgrey;
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
    InputURL: "",
    playlistId: ""
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

  onChangeMusicName = (e) => {
    this.setState({ inputMusicName: e.target.value })
  }
  onChangeArtistName = (e) => {
    this.setState({ inputArtistName: e.target.value })
  }
  onChangeURL = (e) => {
    this.setState({ InputURL: e.target.value })
  }

  onChangeId = (id)=>{
    this.setState({playlistId: id})
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

  playlistsTracks = (playlistId) => {
    const url = (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`)
    axios.get(url, autorizado)
      .then((res) => {
        console.log('trachs', res.data)
      }).catch((err) => {
        console.log('err', err)
      })
  }

  addTrackToPlaylist = (playlistId) => {
    //passar parametros a função
    const url = (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`)
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtistName,
      url: this.state.InputURL
    }
    axios.post(url, body, autorizado)
      .then((res) => {
        console.log('teste', res)
        this.allPlaylists()
        
        // this.playlistsTracks()
      }).catch((err) => {
        console.log(err.mensage)
        console.log('dkjf',playlistId)
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
            onChangeId={this.onChangeId}
          />
          <Center
            tracks={this.state.tracks}
            inputMusicName={this.state.inputMusicName}
            inputArtistName={this.state.inputArtistName}
            InputURL={this.state.InputURL}
            onChangeMusicName={this.onChangeMusicName}
            onChangeArtistName={this.onChangeArtistName}
            onChangeURL={this.onChangeURL}
            addTrackToPlaylist={this.addTrackToPlaylist}
            playlistId={this.state.playlistId}
            playlistsTracks={this.playlistsTracks}
          />
        </MainCont>
        <TocaMusica />
      </Container>
    )
  }
}
