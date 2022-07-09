import React, { useEffect, useState } from 'react'
import CardHome from '../../components/CardHome';
import { ButtonsHome, ContainerHome, HeaderHome, MainHome } from '../styled'
import { GetProfileToChoose, ChoosePerson } from '../../services/FunctionsAPI';
import Heart from '../../assets/Heart.png'


function Home(props) {
    const [profile, setProfile] = useState({})
    const [load, setLoad] = useState(true)
    useEffect(() => {
        GetProfileToChoose(setProfile, setLoad)
    }, [])
    return (
        <ContainerHome>
            <HeaderHome>
                <p>EU</p>
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
                    <button onClick={() => { ChoosePerson(profile.id, false, setProfile, setLoad) }}>vai de base</button>
                    <button onClick={() => { ChoosePerson(profile.id, true, setProfile, setLoad) }}>da pro gasto</button>
                </ButtonsHome>
            </>}
            {load && <div>carregando...</div>}
        </ContainerHome>
    )
}

export default Home;

