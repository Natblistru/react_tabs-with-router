import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => <h1 className="title">Home page</h1>;

const TabsPage = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <Tabs>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>
        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            {tabId === tab.id ? tab.content : null}
          </TabPanel>
        ))}
      </Tabs>
      {!activeTab && <div className="block">Please select a tab</div>}
    </div>
  );
};

const NotFoundPage = () => <h1 className="title">Page not found</h1>;

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar is-light  has-shadow" data-cy="Nav">
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
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/tabs/:tabId" element={<TabsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
