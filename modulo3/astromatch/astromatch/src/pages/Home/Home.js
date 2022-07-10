import React, { useEffect, useState } from 'react'
import CardHome from '../../components/CardHome';
import { ButtonsHome, ContainerHome, Deslike, HeaderHome, Like, MainHome } from '../styled'
import { GetProfileToChoose, ChoosePerson } from '../../services/FunctionsAPI';
import Heart from '../../assets/Heart.png'
import X from '../../assets/X.png'



function Home(props) {
    const [profile, setProfile] = useState({})
    const [load, setLoad] = useState(true)
    useEffect(() => {
        GetProfileToChoose(setProfile, setLoad)
    }, [])
    return (
        <ContainerHome>
            <HeaderHome>
                <h1>AstroMatch</h1>
                <img src={Heart} onClick={() => props.setPage('matches')} />
            </HeaderHome>
            {load === false && <>
                <MainHome>
                    <CardHome
                        profile={profile}
                    />
                </MainHome>

                <ButtonsHome>
                    <Deslike src={X} onClick={() => { ChoosePerson(profile.id, false, setProfile, setLoad) }}/>
                    <Like src={Heart} onClick={() => { ChoosePerson(profile.id, true, setProfile, setLoad) }}/>
                </ButtonsHome>
            </>}
            {load && <MainHome>carregando...</MainHome>}
        </ContainerHome>
    )
}

export default Home;

