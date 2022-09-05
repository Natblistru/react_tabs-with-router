import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Nav = () => {
  return (
    <div className="navbar-brand">
      <NavLink
        to="/"
        className={({ isActive }) => classNames(
          'navbar-item', { 'is-active': isActive },

        )}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => classNames(
          'navbar-item', { 'is-active': isActive },
        )}
      >
        Tabs
      </NavLink>
    </div>
  );
};
