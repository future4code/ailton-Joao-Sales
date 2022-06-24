import React, { Component } from 'react'
import styled from 'styled-components'

const DivCentro = styled.div`
min-width: 75%;
`

export default class Center extends Component {
  render() {
    return (
      <DivCentro>Center</DivCentro>
    )
  }
}
