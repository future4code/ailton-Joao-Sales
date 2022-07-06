import axios from "axios";
import React, { useState, useEffect } from "react";
import { PokeCard } from "./components/PokeCard/PokeCard";
import styled from "styled-components";
import fundo from './components/img/fundo.jpg'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url(${fundo}) ;
background-position: center;
background-size: cover;
height: 100vh;

select{
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 10px;
  width: 280px;
  background-color: gray;
}
`

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  const changePokeName = e => {
    setPokeName(e.target.value)
  }

  useEffect(() => {
    const handlePokemons = async () => {
      await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898')
        .then(res => {
          setPokeList(res.data.results)
        }).catch(err => {
          console.log(err)
        })
    }
    handlePokemons()
  }, [pokeName])

  return (
    <Container>
      <select onChange={changePokeName}>
        <option value={''}>nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemons={pokeName} />}
    </Container>
  );
}

export default App;
