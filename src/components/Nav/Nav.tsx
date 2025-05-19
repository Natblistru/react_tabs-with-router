import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation().pathname;

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={classNames('navbar-item', {
              'is-active': location === '/',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': location.startsWith('/tabs'),
            })}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}