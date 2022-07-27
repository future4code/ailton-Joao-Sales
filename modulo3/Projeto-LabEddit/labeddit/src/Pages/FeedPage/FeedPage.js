import React from "react";
import { Header } from "../../Components/Header/Header";
import { LoginContainer } from "../LoginPage/styled";
import { DivLine2, FormPost, InputPost, PostButton } from "./styled";

export const FeedPage = () => {
  return (
    <div>
      <Header />
      <LoginContainer>
        <FormPost>
          <InputPost placeholder="Escreva seu post..." />
          <PostButton>Postar</PostButton>
        </FormPost>
        <DivLine2 />
      </LoginContainer>
    </div>
  );
};
