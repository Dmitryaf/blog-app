import { AppRouter } from "app/providers/router";
import { useTheme } from "shared/lib/theme/useTheme";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
