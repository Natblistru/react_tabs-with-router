import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Tabs } from './components/TabsPage/Tabs';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
