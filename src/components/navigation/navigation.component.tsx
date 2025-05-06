import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const NavigationComponent: React.FC = () => {
  const getClass = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
