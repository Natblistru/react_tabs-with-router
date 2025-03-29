import classNames from 'classnames';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  const getClassName = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      classNames('navbar-item', { 'is-active': isActive }),
    [],
  );

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getClassName}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
