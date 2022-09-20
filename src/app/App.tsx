import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AppRouter />
      <button type="button" onClick={() => toggleTheme()}>
        Change theme
      </button>
    </div>
  );
};

export default App;
