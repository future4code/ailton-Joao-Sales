import styled from "styled-components";
import { ButtonStyled, FormSyled, InputStyled } from "../LoginPage/styled";

export const InputPost = styled.textarea`
  height: 131px;
  background: #ededed;
  border: none;
  border-radius: 12px; 
  resize: none;
`;

export const FormPost = styled(FormSyled)`
  margin-top: 30px;
`;

export const PostButton = styled(ButtonStyled)`
  border-radius: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const TitleInput = styled(InputStyled)`
  background: #ededed;
  border: none;
  border-radius: 12px;
  height: 50px;
`

export const DivLine2 = styled.div`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 1.3px;
`;

export const DivFeed = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 36px;
overflow: auto;
`
