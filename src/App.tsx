import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Outlet } from 'react-router-dom';

import { NavBar } from './pages/NavBar';

export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

    <div className="section">
      <Outlet />
    </div>
  </>
);
