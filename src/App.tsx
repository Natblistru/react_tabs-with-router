import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const App = () => {
  const pathname = useLocation().pathname;

  if (pathname === '/home') {
    return <Navigate to="/" />;
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn('navbar-item', {
                  'is-active': isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                cn('navbar-item', {
                  'is-active': isActive,
                })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
// {/* Also requires <html class="has-navbar-fixed-top"> */}
