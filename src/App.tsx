import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Tabs } from './Components/Tabs';
import classNames from 'classnames';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav
        className="
        navbar
        is-light
        has-navbar-fixed-top
        is-fixed-top
        is-mobile
        has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="tabs"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {pathname === '/home' && <Navigate to="/" />}
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/tabs" element={<Tabs />}>
              <Route path=":tabId" element={<Outlet />} />
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
