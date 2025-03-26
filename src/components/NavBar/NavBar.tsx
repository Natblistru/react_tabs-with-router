import classNames from 'classnames';
import { Outlet, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const linkActive = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

  return (
    <>
      <nav
        className="navbar is-light is-mobile  has-shadow has-navbar-fixed-top"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <NavLink to=".." className="navbar-item is-active"> */}
            <NavLink to="/" className={linkActive}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={linkActive}>
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
