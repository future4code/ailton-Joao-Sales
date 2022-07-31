import React, { useEffect, useState } from "react";
import { CardPost } from "../../Components/CardPost/CardPost";
import { Header } from "../../Components/Header/Header";
import { LoginContainer } from "../LoginPage/styled";
import { DivFeed, DivLine2, FormPost, InputPost, PostButton, TitleInput } from "./styled";
import { useNavigate } from 'react-router-dom'
import { UseForm } from "../../hooks/UseForm";
import { CreatePost } from "../../Services/RequestsAPI";

export const FeedPage = () => {
  const navigate = useNavigate()
  const {form, onChange} = UseForm({
    title:'',
    body:''
  })


  const submitPost = (e) =>{
    e.preventDefault()
    CreatePost(form)
    console.log(form)
  }
  
  return (
    <div>
      <Header />
      <LoginContainer>
        <FormPost onSubmit={submitPost}>
          <TitleInput
           placeholder="Titulo do post" 
           name='title'
           onChange={onChange}
           value={form.title}
           />
          <InputPost 
          placeholder="Escreva seu post..."
          name='body'
          onChange={onChange}
          value={form.body}
          />
          <PostButton>Postar</PostButton>
        </FormPost>
        <DivLine2 />
        <DivFeed>
          <CardPost />
        </DivFeed>
      </LoginContainer>
    </div>
  );
};
