import React from "react";
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

export const LoginPage = () => {
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
      <FormSyled>
        <InputStyled placeholder="Nome" />
        <InputStyled placeholder="Senha" type={"password"} />
        <DivGhost></DivGhost>
        <ButtonStyled>Continuar</ButtonStyled>
      </FormSyled>
      <DivLine/>
      <ButtonReverse>Crie uma conta!</ButtonReverse>
    </LoginContainer>
  );
};
