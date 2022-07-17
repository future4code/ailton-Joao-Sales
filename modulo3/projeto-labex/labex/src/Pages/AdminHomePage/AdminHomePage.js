import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { goPage } from '../routes/Coordinator'

export const AdminHomePage = () => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      goPage(navigate, 'Login')
    } 
  }, [])

  useEffect(() => {
    const getTrips = async () => {
      try {
        const res = await axios.get(Base_URL + 'trips')
        console.log(res.data.trips)
        setTrips(res.data.trips)
      } catch (err) {
        console.log(err.data)
      }
    }
    getTrips()
  }, [])

  const deleteTrip = async (tripId) => {
    const token = localStorage.getItem('token')
    try {
      const res = await axios.delete(Base_URL + `trips/${tripId}`, {
        headers: {
          auth: token
        }
      })
      console.log('viagem deletada com sucesso', res.data)
    } catch (err) {
      console.log('deu ruim', err.response)
    }
  }

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={() => goPage(navigate, '')}>Voltar</button>
      <button onClick={() => goPage(navigate, 'Admin/Trips/Create')}>Criar Viagem</button>
      <button onClick={() => {
        goPage(navigate, 'Login')
        window.localStorage.setItem('token', '')
      }}>Logout</button>
      <div>
        {trips?.map((item) => {
          return (
            <div
              key={item.id}
            >
              <p>{item.name}</p>
              <button onClick={() => goPage(navigate, `Admin/Trips/${item.id}`)}>details</button>
              <button onClick={() => deleteTrip(item.id)}>Remover Viagem</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
