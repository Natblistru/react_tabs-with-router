import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

const TabContent = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
};

const TabsPage = () => {
  const location = useLocation();

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': location.pathname === `/tabs/${tab.id}`,
              })}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <TabContent />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1 className="title">Home page</h1>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1 className="title">Page not found</h1>
    </div>
  );
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element={<TabsPage />}>
          <Route path="/tabs/:tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
);
