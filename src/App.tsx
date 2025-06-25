import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/',
              })}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/tabs">
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
