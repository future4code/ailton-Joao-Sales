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

// falta aplicar a função de buscar comentarios

export const GetPostComments = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(BaseURL + `posts/${id}/comments`, {
            headers: {
                authorization: token
            }
        })
        console.log('comentario', res.data)
    } catch (err) {
        console.log('erro comentario', err.response)
    }
}

export const CreatePost = async (form) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(BaseURL + 'posts', form, {
            headers: {
                authorization: token
            }
        })
        console.log('post criado', res.data)
    } catch (err) {
        console.log('não foi possivel criar o post', err.response)
    }
}

export const CreateComment = async (id, form) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(BaseURL + `posts/${id}/comments`, form, {
            headers: {
                authorization: token
            }
        })
        console.log('comentario criado', res.data)
    } catch (err) {
        console.log('erro ao criar comentario', err.response)
    }
}

export const ChangePostVote = (id) => {
    const token = localStorage.getItem('token')
    try {
        const res = axios.put(BaseURL + `posts/${id}/votes`, {
            headers: {
                authorization: token
            }
        })
        console.log('changeCvote', res.data)
    } catch (err) {
        console.log('erro ao mudar voto', err.response)
    }
}

export const ChangeCommentVote = (id) => {
    const token = localStorage.getItem('token')
    try {
        const res = axios.put(BaseURL + `comments/${id}/votes`, {
            headers: {
                authorization: token
            }
        })
        console.log('changeCvote', res.data)
    } catch (err) {

    }
}

export const DeletePostVote = (id) => {
    const token = localStorage.getItem('token')
    try {
        const res = axios.delete(BaseURL + `posts/${id}/votes`, {
            headers: {
                authorization: token
            }
        })
        console.log('voto deletado', res.data)
    } catch (err) {
        console.log('erro', err.response)
    }
}

export const DeleteCommentVote = (id) => {
    const token = localStorage.getItem('token')
    try {
        const res = axios.delete(BaseURL + `comments/${id}/votes`, {
            headers: {
                authorization: token
            }
        })
        console.log('voto do comentario deletado', res.data)
    } catch (err) {
        console.log('erro', err.response)
    }
}