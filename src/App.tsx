import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';

export const App = () => {
  const location = useLocation();

  if (location.pathname === `/home`) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <html className="has-navbar-fixed-top">
        <nav
          className="navbar is-light is-fixed-top is-mobile has-shadow"
          data-cy="Nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return classNames('navbar-item', { 'is-active': isActive });
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/tabs"
                className={({ isActive }) => {
                  return classNames('navbar-item', { 'is-active': isActive });
                }}
              >
                Tabs
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<h1 className="title">Home page</h1>} />
              <Route path="tabs" element={<Tabs />}>
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
      </html>
    </>
  );
};
