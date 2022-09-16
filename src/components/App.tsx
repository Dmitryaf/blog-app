import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { AboutPageAsync } from "../pages/About/AboutPageAsync";
import { MainPageAsync } from "../pages/MainPage/MainPageAsync";

import "./index.scss";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageAsync />}></Route>
            <Route path="/about" element={<AboutPageAsync />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
