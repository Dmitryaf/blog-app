import { Suspense } from 'react';

import AppRouter from 'app/providers/router';
import useTheme from 'shared/lib/theme/useTheme';

import classNames from 'shared/lib/classNames/classNames';

import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Suspense fallback="">
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);

export default App;
