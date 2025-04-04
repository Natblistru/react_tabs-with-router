import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { Tab } from '../components/Tab';

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab tab={tab} key={tab.id} tabId={tabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
