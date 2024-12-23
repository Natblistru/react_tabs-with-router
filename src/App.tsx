import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const getLink = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const App = () => (
  <html className="has-navbar-fixed-top">
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLink}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLink}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div>
      <Outlet />
    </div>
  </html>
);
