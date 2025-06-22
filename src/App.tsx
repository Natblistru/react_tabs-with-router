import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={cn('navbar-item', {
                'is-active': currentPath === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', {
                'is-active': currentPath.startsWith('/tabs'),
              })}
            >
              Tabs
            </Link>
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
