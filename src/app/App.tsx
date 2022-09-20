import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
      <button type="button" onClick={() => toggleTheme()}>
        Change theme
      </button>
    </div>
  );
};

export default App;
