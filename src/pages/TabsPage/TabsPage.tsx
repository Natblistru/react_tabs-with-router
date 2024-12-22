import { useContext } from 'react';
import { Tabs } from '../../components/Tabs';
import { TabsContext } from '../../store/tabsContext';
import { Tab } from '../../types/Tab';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabs } = useContext(TabsContext) || { tabs: [] as Tab[] };
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} tabId={tabId ? tabId : ''} />

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
