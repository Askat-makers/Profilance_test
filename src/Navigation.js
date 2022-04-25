import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPage from "./pages/AddPage";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/add-news" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
