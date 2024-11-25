import { Tabs } from './Tabs';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const activeTabId = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={activeTabId ? activeTabId.id : ''} />
      <div className="block" data-cy="TabContent">
        {activeTabId ? activeTabId.content : 'Please select a tab'}
      </div>
    </>
  );
};
