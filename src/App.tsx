// App.tsx

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { Page } from './components/Page';
import { TabsPage } from './components/TabsPage';

export const App = () => {
  const navLinkActive = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={navLinkActive}>
              Home Page
            </NavLink>
            <NavLink to="/tabs" className={navLinkActive}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
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
