import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.scss';
import { RouterPaths } from './routes/Router';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar-item ${isActive && 'is-active'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                `navbar-item ${isActive && 'is-active'}`
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <RouterPaths />
    </>
  );
};
