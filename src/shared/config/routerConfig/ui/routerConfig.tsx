import { RouteProps } from 'react-router-dom';

import AboutPage from 'pages/AboutPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';

const enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.NOT_FOUND]: '*',
};

export const RouterConfig: RouteProps[] = [
  { path: RouterPath.main, element: <MainPage /> },
  { path: RouterPath.about, element: <AboutPage /> },
  { path: RouterPath.not_found, element: <NotFoundPage /> },
];
