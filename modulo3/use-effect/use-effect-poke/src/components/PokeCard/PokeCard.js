import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardPoke = styled.div`
border: 1px solid black;
border-radius: 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* margin-top:200px; */
height: 400px;
width: 280px;
background-color: #c1121f;
img{
    height: 240px;
    /* width: 180px; */
    margin-bottom: 25px;
    background-color: #ffd100;
    border-radius: 8px;
    margin-top: 8px;
}
`
const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
margin-bottom: 8px;
width: 240px;
font-size: 18px;
border-radius: 8px;
background-color: #390099;
color:#ffd100;
`



export function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const pegaPokemon = async () => {
            try {
                const res = await axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemons}`)
                setPokemon(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        pegaPokemon()
    }, [props.pokemons])

    return (
        <CardPoke>
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} />
            )}
            <Text>
                <p><strong>Name: </strong> {pokemon.name}</p>
                <p><strong>weight: </strong> {pokemon.weight} kg</p>
               
                {pokemon.types && <p>{pokemon.types.map(pok =>{
                    return <p>{pok.type.name}</p>
                })}</p>}
            </Text>

        </CardPoke>
    )
}
