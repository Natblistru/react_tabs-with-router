import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  );
};

const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

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

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1 className="title">Page not found</h1>
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={`navbar-item ${location.pathname.startsWith('/tabs') ? 'is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </>
);
