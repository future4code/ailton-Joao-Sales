import React, { Component } from 'react'
import styled from 'styled-components'

const Lateral = styled.aside`
min-width: 25%;
background-color: darkslateblue;
`

export default class BarraLateral extends Component {
  render() {
    // console.log('uyg', this.props.playlists)
    return (
      <Lateral>
        <div>
          <h1>playlists</h1>
          <h3>Crie uma nova playlist</h3>
          <input value={this.props.inputPlaylistName} onChange={this.props.onChangeInputPlaylist} />
          <button onClick={this.props.createPlaylist}>Criar</button>
        </div>
        {this.props.playlists?.map((playlist) => {
          return <div onDoubleClick={() => this.props.deletePlaylist(playlist.id)} key={playlist.id}>
            <strong>{playlist.name}</strong>
          </div>
        })}
      </Lateral>
    )
  }
}
