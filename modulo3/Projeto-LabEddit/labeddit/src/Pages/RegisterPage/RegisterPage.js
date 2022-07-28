import React from "react";
import { Header } from "../../Components/Header/Header";
import { Div65 } from "../../StyledGhost";
import {
  ButtonStyled,
  FormSyled,
  InputStyled,
  LoginContainer,
} from "../LoginPage/styled";
import { BlueP, DivCBox, InputC, RegisterP, TitleR } from "./styled";
import { useNavigate } from "react-router-dom";
import { UseForm } from '../../hooks/UseForm'
import { Signup } from "../../Services/RequestsAPI";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { form, onChange } = UseForm({
    username: '',
    email: '',
    password: ''
  })

  const submitRegister = (e) => {
    e.preventDefault()
    Signup(form)
    console.log(form)
  }

  return (
    <div>
      <Header />
      <LoginContainer>
        <TitleR>Olá, boas vindas ao LabEddit ;)</TitleR>
        <FormSyled onSubmit={submitRegister}>
          <InputStyled
            placeholder="Nome do usuario"
            name={'username'}
            onChange={onChange}
            value={form.username}
          />
          <InputStyled
            placeholder="E-mail"
            type={"email"}
            name={'email'}
            onChange={onChange}
            value={form.email}
          />
          <InputStyled
            placeholder="Senha"
            type={"password"}
            name={'password'}
            onChange={onChange}
            value={form.password}
          />
          <Div65 />
          <RegisterP>
            Ao continuar, você concorda com o nosso
            <BlueP> Contrato de usuário</BlueP> e nossa
            <BlueP> Política de Privacidade</BlueP>
          </RegisterP>
          <DivCBox>
            <InputC type="checkbox" />
            <RegisterP>
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </RegisterP>
          </DivCBox>
          <ButtonStyled>Cadastrar</ButtonStyled>
        </FormSyled>
      </LoginContainer>
    </div>
  );
};
