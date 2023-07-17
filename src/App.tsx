import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { NavBar } from "./components/NavBar";
export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/item/:id" Component={NewsPage} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
};
