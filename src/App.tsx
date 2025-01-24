import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useEffect } from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabPage } from './components/TabsPage';
import { ErrorPage } from './components/ErrorPage';
import { getLinkActiveClass } from './utiles/getLinkActiveClass';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');

    return () => {
      document.documentElement.classList.remove('has-navbar-fixed-top');
    };
  }, []);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" end className={getLinkActiveClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkActiveClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<TabPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabPage tabs={tabs} />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
