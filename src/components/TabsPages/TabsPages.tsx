import React from 'react';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs/Tabs';

type TabsPageProps = {
  tabs: Tab[];
};

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
