import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { PostPage } from "../Pages/PostPage/PostPage";
import { RegisterPage } from "../Pages/RegisterPage/RegisterPage";
import { FeedPage } from "../Pages/FeedPage/FeedPage";
import { GlobalState } from "../global/GlobalState";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/createaccount" element={<RegisterPage />} />
        <Route path="/feed" element={
          <GlobalState>
            <FeedPage />
          </GlobalState>
        } />
        <Route path="/post/:id" element={
          <GlobalState>
            <PostPage />
          </GlobalState>
        } />
        {/* <Route path="" element={""} /> */}
      </Routes>
    </BrowserRouter>
  );
};
