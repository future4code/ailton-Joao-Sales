import React from "react";
import { CardPost } from "../../Components/CardPost/CardPost";
import { Header } from "../../Components/Header/Header";
import { LoginContainer } from "../LoginPage/styled";
import { DivFeed, DivLine2, FormPost, InputPost, PostButton, TitleInput } from "./styled";

export const FeedPage = () => {
  return (
    <div>
      <Header />
      <LoginContainer>
        <FormPost>
          <TitleInput placeholder="Titulo do post"/>
          <InputPost placeholder="Escreva seu post..." />
          <PostButton>Postar</PostButton>
        </FormPost>
        <DivLine2 />
        <DivFeed>
          <CardPost/>
          <CardPost/>
          <CardPost/>
          <CardPost/>
          <CardPost/>
          <CardPost/>
          <CardPost/>
        </DivFeed>
      </LoginContainer>
    </div>
  );
};
