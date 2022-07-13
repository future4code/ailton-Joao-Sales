import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goPage} from '../routes/Coordinator'

export const ApplicationFormPage = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <button>Voltar</button>
      <button>Enviar</button>
    </div>
  
  )
}
