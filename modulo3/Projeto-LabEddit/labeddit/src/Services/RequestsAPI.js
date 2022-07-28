import axios from "axios";
import { BaseURL } from '../Constants/BaseURL'

export const Login = (form) => {
    const token = localStorage.getItem('token')
    axios.post(BaseURL + 'users/login', form)
        .then((res) => {
            console.log('logado com sucesso', res.data)
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log('erro', err.response)
        })
}

export const Signup = (form) => {
    axios.post(BaseURL + 'users/signup', form)
        .then((res) => {
            console.log('conta criada com sucesso', res.data) 
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log('não foi possivel criar a conta', err.response)
        })
}
 