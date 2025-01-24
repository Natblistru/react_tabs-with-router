import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import classNames from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const Root: React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass} data-cy="NavLink">
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClass} data-cy="NavLink">
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs/*" element={<TabsPage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
