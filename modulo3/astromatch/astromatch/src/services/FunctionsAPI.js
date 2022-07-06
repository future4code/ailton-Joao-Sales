import axios from 'axios'
import { UrlAPI } from '../constants/Url'

export const GetProfileToChoose = () => {
    axios.get(UrlAPI + 'sales/person')
        .then(res => {
            //incrementar estado pra buscar perfil
        }).catch(err => {
            console.log(err)
        })
}

export const GetMatches = () => {
    //retornar array de perfis que deram match
    axios.get(UrlAPI + 'sales/matches')
        .then(res => {
            //incrementar estado de array com perfis com matches
        }).catch(err => {
            console.log(err)
        })
}

export const ChoosePerson = () => {
    const body = {
        id: '', //setar id em state,
        choice: true//setar escolha em state como booleano
    }
    axios.post(UrlAPI + 'sales/choose-person' + body)
        .then(res => {
            //incrementar estado pra escolha do match acontecer
        }).catch(err => {
            console.log(err)
        })
}

export const Clear = () => {
    axios.put(UrlAPI + 'sales/clear')
        .then(res => {
            //incrementar estado pra limpar matches
        }).catch(err => {
            console.log(err)
        })
}




