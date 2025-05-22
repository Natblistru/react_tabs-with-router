import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

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
