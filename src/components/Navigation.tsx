import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav className="navbar is-light is-fixed-top is-mobile has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn('navbar-item', { 'is-active': isHomeActive })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={cn('navbar-item', { 'is-active': isTabsActive })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
