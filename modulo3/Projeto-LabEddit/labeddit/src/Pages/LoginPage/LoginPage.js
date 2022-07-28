import React, { useEffect } from "react";
import { DivGhost } from "../../StyledGhost";
import {
  ButtonReverse,
  ButtonStyled,
  Description,
  DivLine,
  FormSyled,
  ImgDiv,
  ImgLogo1,
  ImgLogo2,
  ImgLogo3,
  ImgLogo4,
  InputStyled,
  LoginContainer,
  LogoDiv,
  Title,
} from "./styled";
import { useNavigate } from 'react-router-dom'
import { UseForm } from "../../hooks/UseForm";
import { Login } from "../../Services/RequestsAPI";
import { goToPage } from "../../routes/Coordinator";

export const LoginPage = () => {
  const navigate = useNavigate()
  const { form, onChange } = UseForm({
    email: '',
    password: ''
  })

  const submitLogin = (e) => {
    e.preventDefault()
    Login(form)
    console.log(form)
  }

  return (
    <LoginContainer>
      <LogoDiv>
        <ImgDiv>
          <ImgLogo1 />
          <ImgLogo2 />
          <ImgLogo3 />
          <ImgLogo4 />
        </ImgDiv>
        <Title>LabEddit</Title>
        <Description>O projeto de rede social da Labenu</Description>
      </LogoDiv>
      <FormSyled onSubmit={submitLogin}>
        <InputStyled
          name={'email'}
          placeholder="Nome"
          type={'email'}
          onChange={onChange}
          value={form.email}
        />
        <InputStyled
        name={'password'}
          placeholder="Senha"
          onChange={onChange}
          value={form.password}
          type={"password"} />
        <DivGhost />
        <ButtonStyled>Continuar</ButtonStyled>
      </FormSyled>
      <DivLine />
      <ButtonReverse onClick={()=>goToPage(navigate, '/createaccount')}>Crie uma conta!</ButtonReverse>
    </LoginContainer>
  );
};
