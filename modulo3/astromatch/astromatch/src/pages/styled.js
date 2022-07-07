import styled from "styled-components";

//estilização pagina home
export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
height: 670px;
width: 380px;
background-color: #1e1e1e;
color: #dadee7;
`

export const HeaderHome = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 10%;
width: 100%;
border: 1px solid grey;

h1{
    color:#f0515f;
    display: flex;
    justify-content: center;
    flex-grow: 1;
}
img{
    height: 37px;
    margin-right: 10px;
}
`
export const MainHome = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:78%;
border: 1px solid grey;
`
export const ButtonsHome = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 12%;
border: 1px solid grey;
`

export const CardMain = styled.div`
width: 350px;
height: 490px;
border: 1px solid grey;
`

//estilização pagina home

//estilização pagina Matches

export const MainMatch = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:90%;
border: 1px solid grey;
`

//estilização pagina Matches