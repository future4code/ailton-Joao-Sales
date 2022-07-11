import React from 'react'
import { CardsM, Photo } from '../pages/styled'

export const CardMatches = (props) => {
    return (
        <div>
            {props.listaMatches?.map((item) => {
                return (
                    <CardsM key={item.id}>
                        <Photo photo={item.photo}></Photo>
                        <p>{item.name}</p>
                    </CardsM>
                )
            })}
        </div>
    )
}
