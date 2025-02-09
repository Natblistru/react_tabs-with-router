import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Tabs } from './Components/Tabs/Tabs';
import { NotFound } from './Components/NonFound/NotFound';
import { TabPage } from './Components/Tab/TabPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top
        is-mobile has-shadow has-navbar-fixed-top"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/tabs" element={<Tabs tabs={tabs} />}>
              <Route path=":tabId" element={<TabPage tabs={tabs} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
