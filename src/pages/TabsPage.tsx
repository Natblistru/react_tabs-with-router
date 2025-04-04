import { Tabs } from '../components/Tabs';
import { useContext } from 'react';
import { TabsContext } from '../contexts/TabsProvider';

export const TabsPage = () => {
  const tabs = useContext(TabsContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} />
    </>
  );
};
