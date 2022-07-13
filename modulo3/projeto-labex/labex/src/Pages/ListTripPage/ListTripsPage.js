import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goPage} from '../routes/Coordinator'

export const ListTripsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Lista de viagens</h1>
      <button onClick={()=> goPage(navigate, 'Trips/Application')}>Aplique pra uma viagem</button>
    </div>
  )
}
