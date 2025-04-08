import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const NavBar = () => {
const { pathname } = useLocation()

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
          <Link to="/" className={cn('navbar-item', {
              'is-active' : pathname === '/'
            })}>
              Home
            </Link>

            <Link to="/tabs" className={cn('navbar-item', {
              'is-active' : pathname.startsWith('/tabs')
            })}>
              Tabs
            </Link>
          </div>
        </div>Link
      </nav>
    </>
  );
};
