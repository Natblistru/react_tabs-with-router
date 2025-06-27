import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import * as React from 'react';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { TabsPage } from './components/TabsPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Home />
            <Tabs />
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/tabs/:id" element={<TabsPage />} />
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
