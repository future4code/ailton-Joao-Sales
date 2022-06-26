import React, { Component } from 'react'
import styled from 'styled-components'

const DivCentro = styled.div`
min-width: 75%;
background-color: darkgray;
`

export default class Center extends Component {
  render() {
    return (
      <DivCentro>
        <div>
          <h1>Musicas</h1>
          <h3>Adicione novas musicas</h3>
          <input placeholder={'Musica'} value={this.props.inputMusicName} onChange={this.props.onChangeMusicName} />
          <input placeholder={'Artista'} value={this.props.inputArtistName} onChange={this.props.onChangeArtistName} />
          <input placeholder={'URL'} value={this.props.InputURL} onChange={this.props.onChangeURL} />
          <button onClick={() => this.props.addTrackToPlaylist(this.props.playlistId)} >Adicionar Musica</button>
        </div>
        <div>
          
        </div>
      </DivCentro>

    )
  }
}
