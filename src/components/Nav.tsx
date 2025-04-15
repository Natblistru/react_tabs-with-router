import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={isActiveLink}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={isActiveLink}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
