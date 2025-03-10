import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import cn from 'classnames';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  const gatClassNames = ({ isActive }: { isActive: boolean }) =>
    cn('navbar-item', {
      'is-active': isActive,
    });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={gatClassNames}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={gatClassNames}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="tabs" element={<TabsPage />}>
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
