import { listCountries } from '../../Constants/Countries'
import { useNavigate } from 'react-router-dom'
import { goPage } from '../routes/Coordinator'
import { useForm } from '../../Hooks/UseForms'
import { DivForm } from '../CreateTripPage/Styled'
import axios from 'axios'
import { Base_URL } from '../../Constants/Base_URL'
import { useEffect, useState } from 'react'

export const ApplicationFormPage = () => {
  const navigate = useNavigate()
  const { form, onChange } = useForm({
    trip: '',
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  })

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

  const applyToTrip = async (id) => {
    console.log('body', form)
    const token = localStorage.getItem('token')
    try {
      const res = await axios.post(Base_URL + `trips/${id}/apply`, form, {
        headers: {
          auth: token
        }
      })
      console.log('viagem aplicada', res.data)
    } catch (err) {
      console.log("viagem não aplicada", err.response)
    }
  }

  const makeApply = (e) => {
    e.preventDefault()
    applyToTrip()
    console.log(form)
  }

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <div>
        <DivForm onSubmit={makeApply}>
          <select
            defaultValue={form.trip}
            name={'trip'}
            onChange={onChange}
            required
          >
            <option
              selected={undefined}
              disabled
              label={'escolha uma viagem'}
             />
            {trips?.map((item) => {
              return (
                <option
                  value={item.id}
                  key={item.id}>{item.name}</option>
              )
            })}
          </select>
          <input
            name={'name'}
            placeholder={'nome'}
            onChange={onChange}
          />
          <input
            type={'number'}
            name={'age'}
            placeholder={'idade'}
            onChange={onChange}
          />
          <input
            name={'applicationText'}
            placeholder={'texto de candidatura'}
            onChange={onChange}
          />
          <input
            name={'profession'}
            placeholder={'profissão'}
            onChange={onChange}
          />
          <select
            defaultValue={form.country}
            name={'country'}
            onChange={onChange}
            required
          >
            <option
              selected={undefined}
              disabled
              label={'escolha um país'}
             />
            {listCountries?.map((item, index) => {
              return (
                <option key={index}>{item}</option>
              )
            })}
          </select>
          <button>Enviar</button>
        </DivForm>
      </div>
      <button>Enviar</button>
      <button>Voltar</button>
    </div>

  )
}
