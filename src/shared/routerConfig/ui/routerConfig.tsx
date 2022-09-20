import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const enum AppRouters {
  MAIN = "main",
  ABOUT = "about",
}

const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: "/",
  [AppRouters.ABOUT]: "/about",
};

export const RouterConfig: RouteProps[] = [
  { path: RouterPath.main, element: <MainPage /> },
  { path: RouterPath.about, element: <AboutPage /> },
];
