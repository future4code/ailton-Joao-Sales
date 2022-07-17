import styled from "styled-components"


export const CardFormApp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 35vw;
height: 50vh;
background-color: rgba(54, 115, 155, 0.78);
border-radius: 8px;
h1{
    color: rgba(207, 231, 247, 0.94);
}

`  


export const DivFormApp = styled.form`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center; 
width: 90%;
height: 80%;

//fazer alterações
input{
    height: 30px;
    width: 100%;
    padding: 10px;
    margin: 1.5px 1px;
    border: none;
    border-radius: 8px;
    background-color: rgba(18, 27, 33, 0.86);
    ::placeholder{
        color:rgba(177, 200, 216, 0.94);
    }
}
    select{
        height: 30px;
    width: 100%;
    margin: 1.5px 1px;
    border: none;
    border-radius: 8px;
    background-color: rgba(18, 27, 33, 0.86);
    color:rgba(177, 200, 216, 0.94);

}
`