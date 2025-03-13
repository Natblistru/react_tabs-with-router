import React from 'react';
import { tabs } from '../data/tabs';

type Props = { children: React.ReactNode };

export const TabsContext = React.createContext(tabs);

export const TabsContextProvider: React.FC<Props> = ({ children }) => (
  <TabsContext.Provider value={tabs}>{children}</TabsContext.Provider>
);
