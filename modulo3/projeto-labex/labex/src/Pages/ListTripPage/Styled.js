import styled from "styled-components";
import Fundo from '../../Assets/HomeB.jpg'

export const ContainerTripList = styled.div`
display: flex; 
background-image: url(${Fundo});
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: auto;
`
 
export const Header = styled.div`
h1{
    color: white;
}
`

export const CardTrip = styled.div`
display: flex;
flex-direction: column;
border-radius: 8px;
font-size:20px;
width: 350px;
min-height: 140px;
padding: 10px;
margin: 10px;
background-color: rgba(54, 115, 155, 0.78);

p{
    margin: 1px;
    color:  rgba(207, 231, 247, 0.94);
}

strong {
    color:  rgba(207, 250, 280, 1);
}
`

