import React from "react";
import {
  DivSize,
  HeaderContainer,
  HeaderLogo1,
  HeaderLogo2,
  HeaderLogo3,
  HeaderLogo4,
  HeaderP,
  ImgHeader,
} from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <DivSize/>
      <DivSize>
        <ImgHeader>
          <HeaderLogo1 />
          <HeaderLogo2 />
          <HeaderLogo3 />
          <HeaderLogo4 />
        </ImgHeader>
      </DivSize>
      <DivSize>
        <HeaderP>Entrar</HeaderP>
      </DivSize>
    </HeaderContainer>
  );
};
