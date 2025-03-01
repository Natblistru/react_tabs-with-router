import classnames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

/**
 * A mobile-friendly, fixed-top navbar with a "Home" link and a "Tabs" link.
 *
 *  * The "Tabs" link is just an anchor tag that links to "/tabs".
 *
 * The entire navbar has a "is-light" class and is wrapped in a "container" div.
 *
 * The navbar has a "data-cy" attribute of "Nav" for easier Cypress testing.
 */
export const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={classnames('navbar-item', {
              'is-active': location.pathname === '/',
            })}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="tabs"
            className={classnames('navbar-item', {
              'is-active': location.pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
