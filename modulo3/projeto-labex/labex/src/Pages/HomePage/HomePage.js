import React from 'react'
import { ButtonV, ButtonsDiv, ContainerHome, MainDiv, ButtonA } from './Styled'
import { useNavigate } from 'react-router-dom'
import {goPage} from '../routes/Coordinator'

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <ContainerHome>
      <MainDiv>
        <h1>LabeX</h1>
        <ButtonsDiv>
          <ButtonV onClick={() => goPage(navigate, 'Trips')}>Viagens</ButtonV>
          <ButtonA onClick={() => goPage(navigate, 'Admin')}>Area Admin</ButtonA>
        </ButtonsDiv>
      </MainDiv>
    </ContainerHome>
  )
}
