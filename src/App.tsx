import React from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoudPage';

export const App: React.FC = () => {
  return (
    <>
      <html lang="en" className="has-navbar-fixed-top">
        <nav
          className="
          navbar is-light is-fixed-top is-mobile has-shadow"
          data-cy="Nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `navbar-item ${isActive ? 'is-active' : ''}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/tabs"
                className={({ isActive }) =>
                  `navbar-item ${isActive ? 'is-active' : ''}`
                }
              >
                Tabs
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="section">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </html>
    </>
  );
};
