import React, { Component } from 'react'
import styled from 'styled-components'

const Lateral = styled.aside`
min-width: 25%;
background-color: darkslateblue;
`

export default class BarraLateral extends Component {
  render() {
    return (
      <Lateral>
        BarraLateral
      </Lateral>
    )
  }
}
