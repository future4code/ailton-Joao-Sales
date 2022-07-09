import React, { useEffect, useState } from 'react'
import { ContainerHome, HeaderHome, MainMatch } from '../styled'
import Back from '../../assets/Back.png'
import { GetMatches } from '../../services/FunctionsAPI'
import { CardMatches } from '../../components/CardMatches'

export default function Matches(props) {
  const [listaMatches, setListaMatches] = useState([])

  useEffect(() => {
    GetMatches(setListaMatches)
  }, [])

  return (
    <ContainerHome>
      <HeaderHome>
        <p>EU</p>
        <h1>AstroMatch</h1>
        <img src={Back} onClick={() => props.setPage('home')} />
      </HeaderHome>
      <MainMatch>
        <CardMatches listaMatches={listaMatches} />
      </MainMatch>
    </ContainerHome>
  )
}
