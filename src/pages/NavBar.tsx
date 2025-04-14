import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const handlelinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={handlelinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={handlelinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
