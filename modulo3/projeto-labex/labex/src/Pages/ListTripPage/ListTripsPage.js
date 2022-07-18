import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goPage } from '../routes/Coordinator'
import axios from 'axios'
import { Base_URL } from '../../Constants/Base_URL'
import { CardTrip, ContainerTripList, Header, MainD, PCard } from './Styled'

export const ListTripsPage = () => {
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
    <ContainerTripList>
      <Header>
      <h1>Lista de viagens</h1>
      <button onClick={() => goPage(navigate, 'Trips/Application')}>Aplique pra uma viagem</button>
      </Header>
      <MainD>
        {trips?.map((item) => {
          return (
            <CardTrip key={item.id}>
              <p> <strong>Nome:</strong> {item.name}</p>
              <p> <strong>descrição:</strong> {item.description}</p>
              <p> <strong>Planeta:</strong> {item.planet}</p>
              <p> <strong>data:</strong> {item.date}</p>
              <p> <strong>Duração:</strong> {item.durationInDays}</p>
            </CardTrip>
          )
        })}
      </MainD>
    </ContainerTripList>
  )
}
