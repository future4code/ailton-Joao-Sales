import axios from 'axios'
import { UrlAPI } from '../constants/Url'

export const GetProfileToChoose = async (setProfile, setLoad) => {
    setProfile({})
    setLoad(true)
    try {
        const res = await axios.get(UrlAPI + 'sales/person')
        setProfile(res.data.profile)
        setLoad(false)
    } catch (err) {
        console.log(err)
    }
}
export const GetMatches = async (setListaMatches) => {
    try {
        const res = await axios.get(UrlAPI + 'sales/matches')
        setListaMatches(res.data.matches)
    } catch (err) {
        console.log(err)
    }
}
export const ChoosePerson = async (id, choice, setProfile, setLoad) => {
    try {
        const body = {
            id: id,
            choice: choice
        }
        await axios.post(UrlAPI + 'sales/choose-person', body)
        GetProfileToChoose(setProfile, setLoad)
    } catch (err) {
        console.log(err)
    }
}
export const Clear = async () => {
    try {
        await axios.put(UrlAPI + 'sales/clear')
    } catch (err) {
        console.log(err)
    }
}




