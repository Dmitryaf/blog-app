import React, { createContext } from 'react';

export const enum Themes {
  PRIMARY = 'app_primary_theme',
  SECONDARY = 'app_secondary_theme',
}

export interface ThemeContextProps {
  theme?: Themes;
  setTheme?: (theme: Themes) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
