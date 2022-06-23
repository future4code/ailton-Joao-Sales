import styled from "styled-components"


export const ContainerPai = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`

export const ContainerMain = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: black;
`

export const ContainerQuadradin = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 500px;
height: 500px;
background-color: darkorange;
border-radius: 24px;
box-shadow: 6px 6px 24px 32px grey;
`
export const ContainerQuadradinScroll = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 500px;
height: 500px;
overflow: auto;
border-radius: 24px;
box-shadow: 6px 6px 24px 32px grey;
background-color: darkorange;
`


export const Inputo = styled.input`
border-radius: 8px;
border: none;
padding: 10px;
`
export const InButton = styled.button`
border-radius: 8px;
border: none;
margin-top: 10px;
margin-bottom: 10px;
padding: 10px;
`
export const InButtonCinza = styled.button`
border-radius: 8px;
border: none;
margin-top: 10px;
padding: 10px;
background-color: gray;
color: white;
`
export const DivLado = styled.div`
margin-left: 20px;
`