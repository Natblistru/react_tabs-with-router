import classNames from 'classnames';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  const handleActiveLink = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', {
      'is-active': isActive,
    });

  return (
    <html className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={handleActiveLink}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={handleActiveLink}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </html>
  );
};
