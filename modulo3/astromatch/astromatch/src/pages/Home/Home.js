import React, { useEffect, useState } from 'react'
import CardHome from '../../components/CardHome';
import { ButtonsHome, ContainerHome, HeaderHome, MainHome } from '../styled'
import { GetProfileToChoose, ChoosePerson } from '../../services/FunctionsAPI';
import Heart from '../../assets/Heart.png'


function Home(props) {
    const [profile, setProfile] = useState({})
    // {profile? mostra informações : loading}
    useEffect(() => {
        GetProfileToChoose(setProfile)
    }, [])


    return (
        <ContainerHome>
            <HeaderHome>
                <h1>AstroMatch</h1>
                <img src={Heart} onClick={() => props.setPage('matches')} />
            </HeaderHome>
            <MainHome>
                <CardHome
                    profile={profile}
                />
            </MainHome>
            <ButtonsHome>
                <button onClick={() => { ChoosePerson(profile.id, false, setProfile) }}>vai de base</button>
                <button onClick={() => { ChoosePerson(profile.id, true, setProfile) }}>da pro gasto</button>
            </ButtonsHome>
        </ContainerHome>
    )
}

export default Home;

