import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import NavMenu from './components/NavMenu';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}

    <NavMenu />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
