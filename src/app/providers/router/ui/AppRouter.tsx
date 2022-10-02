import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { RouterConfig } from "shared/config/routerConfig";

const AppRouter = () => (
  <Suspense fallback="">
    <Routes>
      {RouterConfig.map((route) => (
        <Route
          path={route.path}
          element={<div className="page-wrapper">{route.element}</div>}
          key={route.path}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
