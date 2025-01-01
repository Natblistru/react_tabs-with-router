import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';

export const App = () => {
  useLayoutEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
