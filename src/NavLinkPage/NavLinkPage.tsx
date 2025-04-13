import { Link, matchPath, useLocation } from 'react-router-dom';
import cn from 'classnames';

// const getLinkClass = ({ isActive }: { isActive: boolean }) =>
//   cn('navbar-item', { 'is-active': isActive });

export const NavigationLink = () => {
  const location = useLocation();
  const isActive = (path: string) =>
    matchPath({ path, end: path === '/' }, location.pathname);

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn('navbar-item', { 'is-active': isActive('/') })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={cn('navbar-item', { 'is-active': isActive('/tabs') })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
