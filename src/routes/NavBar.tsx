import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { navTabs } from './tabsOption';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {navTabs.map(tab => (
            <Link
              key={tab.id}
              to={tab.id}
              className={classNames('navbar-item', {
                'is-active': pathname == tab.id,
              })}
            >
              {tab.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
