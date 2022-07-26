import React from "react";
import {
  ImgDiv,
  ImgLogo1,
  ImgLogo2,
  ImgLogo3,
  ImgLogo4,
  LoginContainer,
  LoginForm,
  LogoDiv,
  TextImgDiv,
} from "./styled";

export const LoginPage = () => {
  return (
    <LoginContainer>
      <div>
      <LogoDiv>
        <ImgDiv>
          <ImgLogo1 />
          <ImgLogo2 />
          <ImgLogo3 />
          <ImgLogo4 />
        </ImgDiv>
        <h1>LabEddit</h1>
      </LogoDiv>
      <p>O projeto de rede social da Labenu</p>
      </div>
      <LoginForm>
        <input/>
        <input/>
      </LoginForm>
    </LoginContainer>
  );
};
