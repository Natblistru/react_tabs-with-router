import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Route,
  NavLink,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { useEffect, useState } from 'react';
import { HomePage } from './components/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();

  const [selectedNav, setSelectedNav] = useState(location.pathname);

  useEffect(() => {
    setSelectedNav(location.pathname);
  }, [location]);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={`navbar-item ${selectedNav === '/' && 'is-active'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={`navbar-item ${selectedNav.startsWith('/tabs') && 'is-active'}`}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/tabs">
              <Route index element={<TabsPage tabs={tabs} />} />

              <Route path=":tabsId" element={<TabsPage tabs={tabs} />}></Route>
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
