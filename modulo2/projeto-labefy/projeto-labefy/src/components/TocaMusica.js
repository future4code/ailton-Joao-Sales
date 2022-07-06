import React, { Component } from 'react'
import styled from 'styled-components'

const ReprodutorMusica = styled.div`
height: 10vh;
background-color: black;
`

export default class TocaMusica extends Component {
  render() {
    return (
      <ReprodutorMusica>
        <iframe src={this.props.musicURL.url} width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </ReprodutorMusica>
    )
  }
}


