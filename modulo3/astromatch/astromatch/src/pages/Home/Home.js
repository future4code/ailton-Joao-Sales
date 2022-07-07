import React from 'react'
import CardHome from '../../components/CardHome';
import { ButtonsHome, ContainerHome, HeaderHome, MainHome } from '../styled'
import Heart from '../../assets/Heart.png'


function Home(props) {
    return (
        <ContainerHome>
            <HeaderHome>
                <h1>AstroMatch</h1>
                <img src={Heart} onClick={() => props.setPage('matches')} />
                {/* <button>Matches</button> */}
            </HeaderHome>
            <MainHome>
                <CardHome>

                </CardHome>
            </MainHome>
            <ButtonsHome>
                <button>vai de base</button>
                <button>da pro gasto</button>
            </ButtonsHome>
        </ContainerHome>
    )
}

export default Home;

