import React, { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from "../lib/ThemeContext";

export const DEFAULT_THEME =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(DEFAULT_THEME);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
