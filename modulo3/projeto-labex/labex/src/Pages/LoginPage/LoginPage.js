import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goPage } from '../routes/Coordinator'
import { Base_URL } from '../../Constants/Base_URL'
import axios from 'axios'
import { CardLogin, ContainerLogin, DivButton } from './Styled'
import { ButtonA } from '../HomePage/Styled'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      goPage(navigate, 'Admin/Trips/List')
    }
  }, [])

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password:password
    }
    axios.post(Base_URL + 'login/', body)
    .then((res)=>{
      console.log('funcionou garai',res.data)
      localStorage.setItem('token', res.data.token)
      goPage(navigate, 'Admin/Trips/List')
    }).catch((err)=>{
      console.log('deu ruim garai',err.response)
    })
  }

  return (
    <ContainerLogin>
      
      <CardLogin>
      <h1>Login</h1>
        <input
          placeholder={'email'}
          type={'email'}
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder={'password'}
          type={'password'}
          value={password}
          onChange={onChangePassword}
        />
        <DivButton>
        <ButtonA onClick={() => goPage(navigate, '')}>Voltar</ButtonA>
        <ButtonA onClick={() => onSubmitLogin()}>Entrar</ButtonA>
        </DivButton>
      </CardLogin>
    </ContainerLogin>
  )
}
