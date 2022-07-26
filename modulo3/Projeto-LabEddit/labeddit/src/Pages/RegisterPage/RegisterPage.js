import React from "react";
import { Header } from "../../Components/Header/Header";
import { Div65 } from "../../StyledGhost";
import { ButtonStyled, FormSyled, InputStyled, LoginContainer } from "../LoginPage/styled";
import { BlueP, DivCBox, InputC, RegisterP, TitleR } from "./styled";

export const RegisterPage = () => {
  return (
    <div>
      <Header />
      <LoginContainer>
        <TitleR>Olá, boas vindas ao LabEddit ;)</TitleR>
        <FormSyled>
          <InputStyled placeholder="Nome do usuario" />
          <InputStyled placeholder="E-mail" type={"email"} />
          <InputStyled placeholder="Senha" type={"password"} />
          <Div65 />
          <RegisterP>
            Ao continuar, você concorda com o nosso{" "}
            <BlueP>Contrato de usuário</BlueP> e nossa{" "}
            <BlueP>Política de Privacidade</BlueP>
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
