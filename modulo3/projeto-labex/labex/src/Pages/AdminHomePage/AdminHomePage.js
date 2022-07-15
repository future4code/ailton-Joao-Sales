import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { goPage } from '../routes/Coordinator'

export const AdminHomePage = () => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])
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

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={() => goPage(navigate, 'Login')}>Voltar</button>
      <button onClick={() => goPage(navigate, 'Admin/Trips/Create')}>Criar Viagem</button>
      <button onClick={() => {goPage(navigate, 'Login')
      window.localStorage.setItem('token', '')
    }}>Logout</button>
      <div>
        {trips?.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => goPage(navigate, `Admin/Trips/${item.id}`)}
            >
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
