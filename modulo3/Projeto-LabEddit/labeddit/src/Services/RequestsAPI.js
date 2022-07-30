import axios from "axios";
import { BaseURL } from '../Constants/BaseURL'
import { goToPage } from "../routes/Coordinator";




export const Login = (form, navigate) => {
    console.log('req', form)
    axios.post(BaseURL + 'users/login', form)
        .then((res) => {
            console.log('logado com sucesso', res.data)
            localStorage.setItem('token', res.data.token)
            goToPage(navigate, '/feed')
        })
        .catch((err) => {
            console.log('erro', err.response)
        })
}

export const Signup = (form, navigate) => {
    axios.post(BaseURL + 'users/signup', form)
        .then((res) => {
            console.log('conta criada com sucesso', res.data)
            localStorage.setItem('token', res.data.token)
            goToPage(navigate, '/feed')
        })
        .catch((err) => {
            console.log('não foi possivel criar a conta', err.response)
        })
}

export const GetPosts = async (setPost) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(BaseURL + `posts?page=1&size=20`, {
            headers: {
                authorization: token
            }
        })
        setPost(res.data)
        console.log('sucess', res.data)
    } catch (err) {
        console.log('não foi possivel renderizar a lista', err.response)
    }
}

