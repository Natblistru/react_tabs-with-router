import { Outlet, useParams } from 'react-router-dom';
import React from 'react';
import { TabItem } from '../TabItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || '';

  const currentContent = tabs.find(({ id }) => id === selectedTabId)?.content
    || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              key={tab.id}
              tab={tab}
              selectedTabId={selectedTabId}
            />
          ))}
        </ul>
      </div>

      <Outlet />

      <div className="block" data-cy="TabContent">
        {currentContent}
      </div>
    </>
  );
};
