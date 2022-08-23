import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Base_URL } from '../../Constants/Base_URL'
import { ButtonA } from '../HomePage/Styled'
import { CardTrip, ContainerTripList, Header, MainD } from '../ListTripPage/Styled'
import { DivButton } from '../LoginPage/Styled'
import { goPage } from '../routes/Coordinator'
import { CandA, CandDiv, CandP, CardDetailsD } from './Styled'

export const TripDetailsPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [details, setDetails] = useState({})
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      goPage(navigate, 'Login')
    }
  }, [])

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
  }, [update])

  const decideCandidate = async (boolean, candidateId) => {
    const token = localStorage.getItem('token')
    const body = {
      approve: boolean
    }
    try {
      const res = await axios.put(Base_URL + `trips/${details.id}/candidates/${candidateId}/decide`, body, {
        headers: {
          auth: token
        }
      })
      console.log('candidato aprovado', res.data)
      setUpdate(update + 1)
    } catch (err) {
      console.log('foi de base', err.response)
    }
  }

  return (

    <ContainerTripList>
      <Header>
        <h1>Detalhes da viagem</h1>
        <DivButton>
          <ButtonA onClick={() => goPage(navigate, 'Admin/Trips/List')}>Voltar</ButtonA>
        </DivButton>
      </Header>
      <MainD>
        <CardDetailsD> 
          <CardTrip>
            <p>{details.name}</p>
            <p>{details.planet}</p>
            <p>{details.description}</p>
            <p>{details.durationInDays}</p>
            <p>{details.date}</p>
          </CardTrip>
        </CardDetailsD>
        <CandDiv>
          <CandP>
            <h2>Candidatos Pendentes</h2>
            <div>
              {details.candidates?.map((item) => {
                return (
                  <CardTrip key={item.id}>
                    <p >{item.name}</p>
                    <p >{item.applicationText}</p>
                    <p >{item.country}</p>
                    <p >{item.profession}</p>
                    <p >{item.age}</p>
                    <ButtonA onClick={() => decideCandidate(true, item.id)}>Aprovar</ButtonA>
                    <ButtonA onClick={() => decideCandidate(false, item.id)}>Reprovar</ButtonA>
                  </CardTrip>
                )
              })}

            </div>

          </CandP>

          <CandA>
            <h2>Candidatos Aprovados</h2>
            {details.approved?.map((item) => {
              return (
                <CardTrip key={item.id}>
                  <p >{item.name}</p>
                </CardTrip>
              )
            })}
          </CandA>
        </CandDiv>
      </MainD>
    </ContainerTripList>
  )
}
