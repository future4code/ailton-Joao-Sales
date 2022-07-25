import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { PostPage } from "../Pages/PostPage/PostPage";
import { RegisterPage } from "../Pages/RegisterPage/RegisterPage";
import { FeedPage } from "../Pages/RegisterPage/RegisterPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={""} />
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="" element={""} />
      </Routes>
    </BrowserRouter>
  );
};
