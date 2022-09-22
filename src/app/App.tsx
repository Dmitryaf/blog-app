import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button type="button" onClick={() => toggleTheme()}>
        Change theme
      </button>
    </div>
  );
};

export default App;
