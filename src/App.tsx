import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';

import { Navigation } from './Navigation';

export const App = () => {
  return (
    <>
      <Navigation />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
