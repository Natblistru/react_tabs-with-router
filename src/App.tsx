import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { RouteParts } from './types/RouteParts';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to={RouteParts.Home}
              className={classNames('navbar-item', {
                'is-active': location.pathname === RouteParts.Home,
              })}
            >
              Home
            </Link>
            <Link
              to={RouteParts.Tabs}
              className={classNames('navbar-item', {
                'is-active':
                  location.pathname === RouteParts.Tabs ||
                  location.pathname.startsWith(RouteParts.Tabs),
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
