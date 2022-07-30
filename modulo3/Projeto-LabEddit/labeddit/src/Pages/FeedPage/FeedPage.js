import React, { useEffect, useState } from "react";
import { CardPost } from "../../Components/CardPost/CardPost";
import { Header } from "../../Components/Header/Header";
import { LoginContainer } from "../LoginPage/styled";
import { DivFeed, DivLine2, FormPost, InputPost, PostButton, TitleInput } from "./styled";
import { useNavigate } from 'react-router-dom'
import { GetPosts } from '../../Services/RequestsAPI'

export const FeedPage = () => {
  const navigate = useNavigate()


  // useEffect(() => {
  //   GetPosts(setPost)
  //   console.log('feed',post)
  // }, [])
  
  return (
    <div>
      <Header />
      <LoginContainer>
        <FormPost>
          <TitleInput placeholder="Titulo do post" />
          <InputPost placeholder="Escreva seu post..." />
          <PostButton>Postar</PostButton>
        </FormPost>
        <DivLine2 />
        <DivFeed>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </DivFeed>
      </LoginContainer>
    </div>
  );
};
