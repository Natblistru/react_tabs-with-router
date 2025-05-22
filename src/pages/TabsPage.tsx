import { TabList } from '../components/TabList';
import { tabs } from '../store/Constants';

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabList tabs={tabs} />
    </>
  );
};
