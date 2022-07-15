import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { goPage } from '../routes/Coordinator'
import { DivForm } from './Styled'

export const CreateTripPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [planet, setPlanet] = useState([])
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [days, setDays] = useState('')

  const createTrip = async () => {
    console.log('body', body)
    const token = localStorage.getItem('token')
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: days
    }
    try {
      const res = await axios.post(Base_URL + `trips/`, body, {
        headers: {
          auth: token
        }
      })
      console.log('viagem criada', res.data)
    } catch (err) {
      console.log('deu ruim', err.response)
    }
  }

  return (
    <div>
      <h1>CreateTripPage</h1>
      <div>
        <DivForm>
          <input
            placeholder={'Nome'}
            value={name}
          />
          <select>
            <option>Teste</option>
          </select>
          <input
            placeholder={'Data'}
            value={date}
          />
          <input
            placeholder={'Descrição'}
            value={description}
          />
          <input
            placeholder={'Duração da viagem'}
            value={days}
          />
          <button>Criar viagem</button>
        </DivForm>
        <button>voltar</button>
      </div>
    </div>
  )
}
