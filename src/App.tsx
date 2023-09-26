import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import classNames from 'classnames';
import { Home } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Tab } from './types/Tab';
import { TabContent } from './components/TabContent/TabContent';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
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
              className={({ isActive }) => classNames('navbar-item', {
                'is-active': isActive,
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames('navbar-item', {
                'is-active': isActive,
              })}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
              <Route path=":tabId" element={<TabContent tabs={tabs} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
