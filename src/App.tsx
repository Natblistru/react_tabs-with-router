import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { ErrorPage } from './pages/ErrorPage';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            end
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

    <div className="section ">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  </>
);
