import React, { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { AboutPageAsync } from "../pages/About/AboutPageAsync";
import { MainPageAsync } from "../pages/MainPage/MainPageAsync";
import { useTheme } from "../theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />}></Route>
          <Route path="/about" element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
      <button type="button" onClick={() => toggleTheme()}>
        Change theme
      </button>
    </div>
  );
};

export default App;
