import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, useLocation } from 'react-router-dom';
import { RouteParts as RoutesParts } from './types/RouteParts';
import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const App = ({ children }: Props) => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to={RoutesParts.Home}
              className={classNames('navbar-item', {
                'is-active': location.pathname === RoutesParts.Home,
              })}
            >
              Home
            </Link>
            <Link
              to={RoutesParts.Tabs}
              className={classNames('navbar-item', {
                'is-active':
                  location.pathname === RoutesParts.Tabs ||
                  location.pathname.startsWith(RoutesParts.Tabs),
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">{children}</div>
    </>
  );
};
