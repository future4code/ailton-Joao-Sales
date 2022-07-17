import styled from "styled-components";
import Fundo from '../../Assets/HomeB.jpg'


export const ContainerCreate = styled.div`
display: flex; 
justify-content: center;
align-items: center;
background-image: url(${Fundo});
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
`

export const CardForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: blue;
h1{
    color: white;
}

`  


export const DivForm = styled.form`
display: flex;
flex-direction: column; 
justify-content: center;
width: 400px;
`