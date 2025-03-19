import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  useLocation,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => (
  <div className="container">
    <h1 className="title">Home page</h1>
  </div>
);

const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selectedTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};

const NotFoundPage = () => (
  <div className="container">
    <h1 className="title">Page not found</h1>
  </div>
);

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={`navbar-item ${currentPath === '/' ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${currentPath.startsWith('/tabs') ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};
