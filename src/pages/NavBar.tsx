import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const handleLinkClass = (isActive: boolean): string => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className={handleLinkClass(pathname === '/')}>
            Home
          </Link>
          <Link
            to="/tabs"
            className={handleLinkClass(pathname.startsWith('/tabs'))}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
