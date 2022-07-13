import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goPage } from '../routes/Coordinator'

export const AdminHomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button>Voltar</button>
      <button onClick={()=> goPage(navigate, 'Admin/Trips/Create')}>Criar Viagem</button>
      <button>Logout</button>
      <button  onClick={()=> goPage(navigate, 'Admin/Trips/id:')}>Detalhes da viagem por ID</button>
    </div>
  )
}
