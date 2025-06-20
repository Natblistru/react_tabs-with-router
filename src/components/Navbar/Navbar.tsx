import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const isNavLinkActive = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

export const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={isNavLinkActive}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={isNavLinkActive}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
