import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goPage } from '../routes/Coordinator'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }

   const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }

  const onSubmitLogin = () =>{
    console.log(email, password)
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input 
        placeholder='email'
        type='email'
        
        />
        <input placeholder='password'/> 
        <button onClick={() => goPage(navigate, 'Admin/Trips/List')}>Entrar</button>
        <button onClick={() => goPage(navigate, )}>Voltar</button>
      </div>
    </div>
  )
}
