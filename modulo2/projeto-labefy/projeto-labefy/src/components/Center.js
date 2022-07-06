import React, { Component } from 'react'
import styled from 'styled-components'
import { Butone, Inputo } from '../style'

const DivCentro = styled.div`
min-width: 75%;
background-color: gray;
overflow: auto;
`

const Espacamento = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
gap:10px;
box-shadow: 2px 3px 2px 3px honeydew;
border-radius: 8px;
margin: 16px;
background-color: darkslategray;
color: whitesmoke;
`

export default class Center extends Component {
  render() {
    console.log(this.props.tracks)
    return (
      <DivCentro>
        <div>
          <h1>Musicas</h1>
          <h3>Adicione novas musicas</h3>
          <Inputo placeholder={'Musica'} value={this.props.inputMusicName} onChange={this.props.onChangeMusicName} />
          <Inputo placeholder={'Artista'} value={this.props.inputArtistName} onChange={this.props.onChangeArtistName} />
          <Inputo placeholder={'URL'} value={this.props.InputURL} onChange={this.props.onChangeURL} />
          <Butone onClick={() => this.props.addTrackToPlaylist(this.props.playlistId)} >Adicionar Musica</Butone>
        </div>
        <div>
          {this.props.tracks?.map((track) => {
            return (
              <Espacamento onClick={() => this.props.callURL(track)} key={track.id}>
                <strong >
                  {track.name}
                </strong>
                <strong> {track.artist}</strong>
              </Espacamento>
            )
          })}
        </div>
      </DivCentro>

    )
  }
}
