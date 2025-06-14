import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';
import React from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Navigation = () => (
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
          end
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
);

const HomePage = () => <h1 className="title">Home page</h1>;

const TabsComponent = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId
          ? selectedTab
            ? selectedTab.content
            : 'Please select a tab'
          : 'Please select a tab'}
      </div>
    </>
  );
};

const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>
    <TabsComponent />
  </>
);

const NotFoundPage = () => <h1 className="title">Page not found</h1>;

export const App = () => (
  <>
    <html className="has-navbar-fixed-top" />
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
