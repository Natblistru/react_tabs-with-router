import React from 'react';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: '1', title: 'Tab 1', content: 'This is Tab 1 content' },
  { id: '2', title: 'Tab 2', content: 'This is Tab 2 content' },
  { id: '3', title: 'Tab 3', content: 'This is Tab 3 content' },
];

export const TabsPage: React.FC = () => {
  return (
    <>
      <h1>Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
