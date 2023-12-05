import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import classNames from 'classnames';
import TabPages from './components/TabPages';

const getLinksActive = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', { 'is-active': isActive })
);

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinksActive}>Home</NavLink>
          <NavLink to="/tabs" className={getLinksActive}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/tabs">
            <Route index element={<TabPages />} />
            <Route path=":tabId" element={<TabPages />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
