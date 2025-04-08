import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      // eslint-disable-next-line max-len
      className="navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
