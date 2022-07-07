import React from 'react'
import { ContainerHome, HeaderHome, MainMatch } from '../styled'
import Back from '../../assets/Back.png'

export default function Matches(props) {
  return (
    <ContainerHome>
      <HeaderHome>
        <h1>AstroMatch</h1>
        <img src={Back} onClick={() => props.setPage('home')} />
        {/* <button>Matches</button> */}
      </HeaderHome>
      <MainMatch>

      </MainMatch>

    </ContainerHome>
  )
}
