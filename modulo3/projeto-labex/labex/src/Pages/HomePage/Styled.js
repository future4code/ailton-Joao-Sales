import styled from "styled-components";
import Fundo from '../../Assets/HomeB.jpg'

export const ContainerHome = styled.div`
display: flex; 
justify-content: center;
align-items: center;
background-image: url(${Fundo});
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
`

export const MainDiv = styled.div`
display: flex;
width: 25vw;
height: 25vh;
flex-direction: column;
color: #c0d6e7;
h1{
    font-size: 50px;
}
`

export const ButtonsDiv = styled.div`
display: flex;
justify-content: space-between;
`

export const ButtonV = styled.button`
padding: 5px 8px;
background-color:#01f2f2;
color: #43679d;
font-size: 16px;
border-radius: 8px;
`
export const ButtonA = styled.button`
padding: 5px 8px;
background-color:#01f2f2;
color: #43679d;
font-size: 16px;
border-radius: 8px;

`