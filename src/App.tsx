import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, NavLink, useParams, Navigate } from 'react-router-dom';
import classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => {
  const params = useParams();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {params['*'] === 'home' && <Navigate to=".." replace={true} />}
          <Outlet />
        </div>
      </div>
    </>
  );
};
