import React from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  useLocation,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabContent: React.FC = () => {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  if (!tab) {
    return <Navigate to="/tabs" replace />;
  }

  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};

const TabList: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentTabId = currentPath.split('/').pop();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === currentTabId ? 'is-active' : ''}
          >
            <Link
              to={`/tabs/${tab.id}`}
              replace
              onClick={e => {
                if (currentPath === `/tabs/${tab.id}`) {
                  e.preventDefault();
                }
              }}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TabsPage: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabList />

      <Routes>
        <Route
          path="/"
          element={
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          }
        />
        <Route path="/:tabId" element={<TabContent />} />
      </Routes>
    </div>
  </div>
);
