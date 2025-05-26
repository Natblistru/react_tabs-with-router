/* eslint-disable max-len */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import {
  //Link,
  Outlet,
  NavLink,
  //useParams,
  useLocation,
  useParams,
  Link,
  Navigate,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';
export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
// #region isActive
interface Options {
  isActive: boolean;
}
const getLinkActive = ({ isActive }: Options) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

const getLinkStyle = ({ isActive }: Options) => ({
  color: isActive ? 'red' : '',
});

// #endregion
export const App = () => {
  //const { pathname, search } = useLocation();
  const { pathname } = useLocation();
  const { tabsId } = useParams();

  if (pathname === '/home') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/home" className="navbar-item">
              <img src="/logo.svg" alt="MA" className="logo" />
            </Link>
            <NavLink to="/" className={getLinkActive} style={getLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={getLinkActive} style={getLinkStyle}>
              Tabs
            </NavLink>

            {tabsId && (
              <NavLink
                to={`/tabs/${tabsId}`}
                className={getLinkActive}
                style={getLinkStyle}
              >
                {tabsId}
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <div className="section">
        {/*<p className="title is-5 has-text-info">{pathname}</p>
        <p className="title is-6">{search && search.replaceAll('&', ' & ')}</p>*/}

        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
