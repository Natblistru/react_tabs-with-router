import { useParams } from 'react-router-dom';
import TabList from '../components/TabList';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <TabList tabs={tabs} />
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id == tabId)
          ? tabs.find(tab => tab.id == tabId)?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};

export default TabsPage;
