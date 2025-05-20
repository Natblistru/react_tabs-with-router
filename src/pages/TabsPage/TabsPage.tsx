import { Tabs } from '../../components/Tabs/Tabs';
import { useTabs } from '../../store/TabsContext';

export const TabsPage = () => {
  const { tabs } = useTabs();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
