import React, { memo } from 'react';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem/TabItem';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = memo(({ tabs }) => {
  const { tabId } = useParams();
  const activeTabId = tabId;
  const currentTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} activeTabId={activeTabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
});

TabsList.displayName = 'TabsList';
