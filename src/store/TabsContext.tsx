import { Tab } from '../types/Tab';
import React, { useMemo } from 'react';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsContext = React.createContext({ tabs: [] as Tab[] });

type Props = {
  children: React.ReactNode;
};

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const value = useMemo(() => ({ tabs }), []);

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
