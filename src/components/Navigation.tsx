import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { isActiveClass } from '../utils/activeClass';

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <nav
            className="navbar is-light is-fixed-top is-mobile has-shadow"
            data-cy="Nav"
          >
            <div className="container">
              <div className="navbar-brand">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActiveClass(isActive)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/tabs"
                  className={({ isActive }) => isActiveClass(isActive)}
                >
                  Tabs
                </NavLink>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </>
  );
};
