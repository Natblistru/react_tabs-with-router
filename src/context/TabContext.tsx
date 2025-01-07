import { createContext, ReactNode, useState } from 'react';
import { Tab } from '../types/Tab';

export const TabContext = createContext<{
  selectedTabId: Tab['id'] | null;
  setSelectedTabId: React.Dispatch<React.SetStateAction<Tab['id'] | null>>;
}>({
  selectedTabId: null,
  setSelectedTabId: () => {},
});

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTabId, setSelectedTabId] = useState<Tab['id'] | null>(null);

  return (
    <TabContext.Provider value={{ selectedTabId, setSelectedTabId }}>
      {children}
    </TabContext.Provider>
  );
};
