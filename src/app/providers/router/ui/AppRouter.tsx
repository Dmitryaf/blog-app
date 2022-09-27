import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { RouterConfig } from "shared/config/routerConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {RouterConfig.map((route) => {
          return (
            <Route
              path={route.path}
              element={<div className="page-wrapper">{route.element}</div>}
              key={route.path}
            ></Route>
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
