import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <div>
                <b>{ props.nome }</b>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;