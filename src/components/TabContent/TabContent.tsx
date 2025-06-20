import { useParams, useOutletContext } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type OutletContext = { tabs: Tab[] };

export const TabContent = () => {
  const { tabId } = useParams();
  const { tabs } = useOutletContext<OutletContext>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {activeTab ? activeTab.content : 'Please select a tab'}
    </div>
  );
};
