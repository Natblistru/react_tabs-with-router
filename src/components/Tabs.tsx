import React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTabId: string | undefined;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
