import React from 'react';
import { tabs } from '../data/tabs';
import { TabsItem } from './TabsItems';
import { useParams } from 'react-router-dom';

export const TabsList: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabsItem key={tab.id} tab={tab} selectedTab={selectedTab} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? `${selectedTab.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
