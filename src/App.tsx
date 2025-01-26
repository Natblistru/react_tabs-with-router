import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFound';

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
              return cn('navbar-item', { 'is-active': isActive });
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return cn('navbar-item', { 'is-active': isActive });
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
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tabs/*" element={<Tabs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  </>
);
