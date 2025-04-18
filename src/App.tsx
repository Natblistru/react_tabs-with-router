import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { TabContent } from './components/TabContent';

export const App = () => (
  <>
    <Routes>
      <Route path="" element={<HomePage />}></Route>
      <Route path="home" element={<Navigate to="/" replace />}></Route>
      <Route path="tabs" element={<TabsPage />}>
        <Route index element={<TabContent />}></Route>
        <Route path=":tabId" element={<TabContent />}></Route>
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
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
  </>
);
