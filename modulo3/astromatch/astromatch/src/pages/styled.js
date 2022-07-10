import { Profiler } from "react";
import styled from "styled-components";

//estilização pagina home
export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
height: 670px;
width: 380px;
background-color: #1e1e1e;
color: #dadee7;
border: 1px solid grey;
border-radius: 14px;
`

export const HeaderHome = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 10%;
width: 100%;


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

`
export const ButtonsHome = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 12%;

`

export const CardMain = styled.div`
display: flex;
align-items: flex-end;
width: 378px;
height: 522px;
/* border: 1px solid grey; */
background-image: url(${(props) => props.photo});
background-position: ${(props) => props.name === 'Joker' ? 'center top left' : 'center top '};
background-size: cover;
`
export const ProfileText = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: end;
 height: 100px;
 width: 100%;
 background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
h3{
    margin-left: 10px;
    margin-bottom: 4px;
}
h4{
    margin-left: 10px;
    margin-bottom: 10px;
}
`

export const Deslike = styled.img`
height: 50px;
transition: 0.3s;
:hover{
height: 45px;
}
:active{
transform: rotate(-30deg);
transition: 0.3s;
}
`
export const Like = styled.img`
height: 50px;
transition: 0.3s;
:hover{
height: 45px;
}
:active{
transform: rotate(30deg);
transition: 0.3s;
}
`


//estilização pagina home

//estilização pagina Matches

export const MainMatch = styled.div`
display: flex;
height:90%;
width: 100%;
border: 1px solid grey;
overflow: auto;
`

export const CardsM = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 340px;
margin: 5px 10px ;
`

export const Photo = styled.div`
display: flex;
height: 70px;
width: 70px;
background-image: url(${(props) => props.photo});
background-position: ${(props) => props.name === 'Joker' ? 'center top left' : 'center top '};
background-size: cover;
border-radius: 50%; 
`

//estilização pagina Matches