import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import {
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';

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
            className={({ isActive }) => cn('navbar-item',
              { 'is-active': isActive })}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => cn('navbar-item',
              { 'is-active': isActive })}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="tabs" element={<Tabs />}>
            <Route
              path=":tabId"
              element={<Tabs />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
