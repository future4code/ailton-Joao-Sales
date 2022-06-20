import React from 'react';
import styled from 'styled-components'

const ContainerGrande = styled.div `
   display: flex;
    align-items: center;
    justify-content: flex-start ;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImageGrande = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const TituloGrande = styled.h4 `
 margin-bottom: 15px;
`

const TextosGrandes = styled.div `
  display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

function CardGrande(props) {
    return (
        <ContainerGrande className="bigcard-container">
            <ImageGrande src={ props.imagem } />
            <TextosGrandes>
                <TituloGrande>{ props.nome }</TituloGrande>
                <p>{ props.descricao }</p>
            </TextosGrandes>
        </ContainerGrande>
    )
}

export default CardGrande;