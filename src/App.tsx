import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';
import { useMemo } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const Navigation = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {[
            { name: 'Home', to: '/' },
            { name: 'Tabs', to: '/tabs' },
          ].map(({ name, to }) => (
            <NavLink
              key={name}
              to={to}
              className={({ isActive }) =>
                classNames('navbar-item', {
                  'is-active': isActive,
                })
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);

const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = useMemo(
    () => tabs.find(({ id }) => id === tabId),
    [tabId],
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li data-cy="Tab" key={id}>
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};

export const App = () => (
  <Routes>
    <Route element={<Navigation />}>
      <Route index element={<h1 className="title">Home page</h1>} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Route>
  </Routes>
);
