import React from 'react'
import { ButtonV, ButtonsDiv, ContainerHome, MainDiv, ButtonA } from './Styled'

export const HomePage = () => {
  return (
    <ContainerHome>
        <MainDiv>
            <h1>Labe X</h1>
            <ButtonsDiv>
                <ButtonV>Viagens</ButtonV>
                <ButtonA>Area Admin</ButtonA>
            </ButtonsDiv>
        </MainDiv>
    </ContainerHome>
  )
}
