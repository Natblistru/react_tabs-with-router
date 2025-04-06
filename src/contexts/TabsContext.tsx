import { createContext } from 'react';
import { Tab } from '../types/Tab';

type TabsContextType = {
  tabs: Tab[];
  // setTodos: (todos: Todo[] | ((v: Todo[]) => Todo[])) => void;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsContext = createContext<TabsContextType>({
  tabs: tabs,
  // setTodos: () => { },
});

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TabsContext.Provider value={{ tabs }}>{children}</TabsContext.Provider>
  );
};
