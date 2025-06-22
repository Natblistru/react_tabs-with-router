import { FC } from 'react';
import { Tab } from '../types/Tab';
import { Tabs } from '../components/Tabs';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: FC<TabsPageProps> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
