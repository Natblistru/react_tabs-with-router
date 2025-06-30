import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type Params = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: Params) => {
  const { tabsId } = useParams<{ tabsId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTab={activeTab} />
    </>
  );
};
