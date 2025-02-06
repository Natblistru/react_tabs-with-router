import classNames from 'classnames';
import { Outlet, NavLink } from 'react-router-dom';

export const Navigation = () => {
  const getlinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getlinkClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getlinkClass}>
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
