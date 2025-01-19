import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams<{ tabId: string }>();
  const location = useLocation();

  // If tabId is undefined (i.e., we're at /tabs), show 'Please select a tab'
  const currentTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  // Function to check if the tab is active
  const isActive = (tabIdParam: string) => {
    const pathSegments = location.pathname.split('/');
    const currentTabId = pathSegments.length > 2 ? pathSegments[2] : null;

    return tabIdParam === currentTabId;
  };

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={isActive(tab.id) ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {/* Show default message if no tab is selected */}
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
