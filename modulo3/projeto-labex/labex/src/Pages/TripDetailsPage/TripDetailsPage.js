import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { goPage } from '../routes/Coordinator'

export const TripDetailsPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const getTripDetails = async () => {
      const token = localStorage.getItem('token')
      try {
       const res = await axios.get(Base_URL + `trip/${params.id}`, {
          headers: {
            auth: token
          }
        })
        console.log('detalhes', res.data)
        setDetails(res.data.trip)
      } catch (err) {
        console.log('erro', err.response)
      }
    }
    getTripDetails()
  }, [])

  return (
    <div>
      <h1>TripDetailsPage</h1>
      <div>
      <p>{details.name}</p>
      <p>{details.planet}</p>
      <p>{details.description}</p>
      <p>{details.durationInDays}</p>
      <p>{details.date}</p>
      </div>

    <button  onClick={() => goPage(navigate, 'Admin/Trips/List')}>Voltar</button>
    </div>
  )
}
