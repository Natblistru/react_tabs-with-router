import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(
              'navbar-item',
              { 'is-active': isActive },
            )}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => classNames(
              'navbar-item',
              { 'is-active': isActive },
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
