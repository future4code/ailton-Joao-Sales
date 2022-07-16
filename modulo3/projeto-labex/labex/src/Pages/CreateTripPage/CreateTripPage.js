import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { goPage } from '../routes/Coordinator'
import { DivForm } from './Styled'
import { useForm } from '../../Hooks/UseForms'

export const CreateTripPage = () => {
  const navigate = useNavigate()
  const { form, onChange } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })

  const createTrip = async () => {
    console.log('body', form)
    const token = localStorage.getItem('token')

    try {
      const res = await axios.post(Base_URL + `trips/`, form, {
        headers: {
          auth: token
        }
      })
      console.log('viagem criada', res.data)

    } catch (err) {
      console.log('deu ruim', err.response)
    }
  }

  const takeTrip = (e) => {
    e.preventDefault()
    createTrip()
    console.log(form)
  }

  return (
    <div>
      <h1>CreateTripPage</h1>
      <div>
        <DivForm onSubmit={takeTrip}>
          <input
            name={'name'}
            placeholder={'Nome'}
            value={form.name}
            onChange={onChange}
            required
          />
          <select 
          name={'planet'}
          onChange={onChange}
          required>
            <option>Teste</option>
            <option>Teste1</option>
          </select>
          <input
            type={'date'}
            name={'date'}
            placeholder={'Data'}
            value={form.date}
            onChange={onChange}
            required
          />
          <input
            name={'description'}
            placeholder={'Descrição'}
            value={form.description}
            onChange={onChange}
            required
          />
          <input
            type={'number'}
            name={"durationInDays"}
            placeholder={'Duração da viagem'}
            value={form.durationInDays}
            onChange={onChange}
            required
          />
          <button>Criar viagem</button>
        </DivForm>
        <button  onClick={() => goPage(navigate, 'Admin/Trips/List')}>voltar</button>
      </div>
    </div>
  )
}
