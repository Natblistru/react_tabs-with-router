import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { TabCell } from './Tab';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <Tabs tabs={tabs} activeTabId={tabId} />
      <TabCell tab={currentTab} />
    </>
  );
};
