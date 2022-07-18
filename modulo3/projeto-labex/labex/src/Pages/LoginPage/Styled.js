import styled from "styled-components";
import Fundo from '../../Assets/HomeB.jpg'

export const ContainerLogin = styled.div`
display: flex; 
justify-content: center;
align-items: center;
background-image: url(${Fundo});
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
`

export const CardLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 520px;
height: 180px;
background-color: rgba(54, 115, 155, 0.78);
border-radius: 8px;
h1{
    color: white;
    margin: 10px;
}
input{
    height: 30px;
    width: 90%;
    padding: 10px;
    margin: 1.5px 1px;
    border: none;
    border-radius: 8px;
    color:rgba(177, 200, 216, 0.94);
    background-color: rgba(18, 27, 33, 0.86);
    ::placeholder{
        color:rgba(177, 200, 216, 0.94);
    }
}
`

export const DivButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 90%;
margin-top: 10px;

`