import React from 'react';
import { Tab } from '../../types/Tab';

type TabsContextType = {
  tabs: Tab[];
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabContext = React.createContext<TabsContextType>({ tabs });

type Props = {
  children: React.ReactNode;
};

export const TabContextProvider: React.FC<Props> = ({ children }) => (
  <TabContext.Provider value={{ tabs }}>{children}</TabContext.Provider>
);
