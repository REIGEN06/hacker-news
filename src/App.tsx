/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StoryPage } from "./pages/StoryPage";
import { ErrorPage } from "./pages/ErrorPage";
import { NavBar } from "./components/NavBar";
export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/item/:id" Component={StoryPage} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
};



