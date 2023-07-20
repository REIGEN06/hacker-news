import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { NavBar } from "./components/NavBar";
import styled, { keyframes } from "styled-components";
export const App = () => {
  return (
    <BrowserRouter>
      <ColorBackground>
        <NavBar />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/item/:id" Component={NewsPage} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </ColorBackground>
    </BrowserRouter>
  );
};

const colorChangeBackground = keyframes`
  0% {
    background-color: #68c6f9;
  }
  33% {
    background-color: #86b2f5;
  }
  66% {
    background-color: #86b2f5;
  }
  100% {
    background-color: #68c6f9;
  }
`;

const ColorBackground = styled.div`
  animation: ${colorChangeBackground} 4s ease infinite;
`;
