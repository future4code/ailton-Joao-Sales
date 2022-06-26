import React, { Component } from 'react'
import styled from 'styled-components'

const Lateral = styled.aside`
min-width: 25%;
background-color: black;
color:white;
`

export default class BarraLateral extends Component {
  render() {
    return (
      <Lateral>
        <div>
          <h1>playlists</h1>
          <h3>Crie uma nova playlist</h3>
          <input value={this.props.inputPlaylistName} onChange={this.props.onChangeInputPlaylist} placeholder={'insira uma playlist'} />
          <button onClick={this.props.createPlaylist}>Criar</button>
        </div>
        {this.props.playlists?.map((playlist) => {
          return <div onClick={() => this.props.onChangeId(playlist.id)} onDoubleClick={() => this.props.deletePlaylist(playlist.id)} key={playlist.id}>
            <strong>{playlist.name}</strong>
          </div>
        })}
      </Lateral>
    )
  }
}
