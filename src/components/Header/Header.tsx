import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(
              'navbar-item',
              { isActive },
            )}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => classNames(
              'navbar-item',
              { isActive },
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
