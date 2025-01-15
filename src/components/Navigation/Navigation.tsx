import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const setNavClasses = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={setNavClasses}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={setNavClasses}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
