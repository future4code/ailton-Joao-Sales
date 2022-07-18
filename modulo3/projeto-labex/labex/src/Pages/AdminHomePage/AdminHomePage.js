import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { ButtonA } from '../HomePage/Styled'
import { ContainerTripList, Header, MainD } from '../ListTripPage/Styled'
import { DivButton } from '../LoginPage/Styled'
import { goPage } from '../routes/Coordinator'
import { ButtonsAdm, CardAdm } from './Styled'

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
    <ContainerTripList>
      <Header>
      <h1>Painel Administrativo</h1>
      <ButtonsAdm>
      <ButtonA onClick={() => goPage(navigate, '')}>Voltar</ButtonA>
      <ButtonA onClick={() => goPage(navigate, 'Admin/Trips/Create')}>Criar Viagem</ButtonA>
      <ButtonA onClick={() => {
        goPage(navigate, 'Login')
        window.localStorage.setItem('token', '')
      }}>Logout</ButtonA>
      </ButtonsAdm>
      </Header>
      <MainD>
        {trips?.map((item) => {
          return (
            <CardAdm
              key={item.id}
            >
              <p>{item.name}</p>
              <DivButton>
              <ButtonA onClick={() => goPage(navigate, `Admin/Trips/${item.id}`)}>Detalhes</ButtonA>
              <ButtonA onClick={() => deleteTrip(item.id)}>Remover</ButtonA>
              </DivButton>
            </CardAdm>
          )
        })}
      </MainD>
    </ContainerTripList>
  )
}
