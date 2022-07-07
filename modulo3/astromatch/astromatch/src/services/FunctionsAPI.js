import axios from 'axios'
import { UrlAPI } from '../constants/Url'

export const GetProfileToChoose = (setProfile) => {
    setProfile({})
    axios.get(UrlAPI + 'sales/person')
        .then(res => {
            setProfile(res.data.profile)
        }).catch(err => {
            console.log(err)
        })
}
export const GetMatches = (setListaMatches) => {
    axios.get(UrlAPI + 'sales/matches')
        .then(res => {
            setListaMatches(res.data.matches)
        }).catch(err => {
            console.log(err)
        })
}
 
export const ChoosePerson = (id, choice, setProfile) => {
    const body = {
        id: id,
        choice: choice
    }
    axios.post(UrlAPI + 'sales/choose-person', body)
        .then(
            GetProfileToChoose(setProfile)
        ).catch(err => {
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




