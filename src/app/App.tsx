import { Suspense, useEffect } from 'react';

import AppRouter from 'app/providers/router';

import classNames from 'shared/lib/classNames/classNames';

import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
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
};

export default App;
