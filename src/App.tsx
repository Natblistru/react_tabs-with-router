import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { TabContent } from './components/TabContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

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
            className={({ isActive }) =>
              `navbar-item${isActive ? ' is-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              `navbar-item${isActive ? ' is-active' : ''}`
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route
        path="/"
        element={
          <div className="section">
            <div className="container">
              <h1 className="title">Home page</h1>
            </div>
          </div>
        }
      />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
        <Route index element={<p>Please select a tab</p>} />
        <Route path=":tabId" element={<TabContent tabs={tabs} />} />
      </Route>
      <Route
        path="*"
        element={
          <div className="section">
            <div className="container">
              <h1 className="title">Page not found</h1>
            </div>
          </div>
        }
      />
    </Routes>
  </>
);
