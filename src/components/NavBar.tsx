import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

function getLinkClass(isActive: boolean): string {
  return cn('navbar-item', { 'is-active': isActive });
}

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className={getLinkClass(pathname === '/')}>
            Home
          </Link>
          <Link
            to="/tabs"
            className={getLinkClass(pathname.startsWith('/tabs'))}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
