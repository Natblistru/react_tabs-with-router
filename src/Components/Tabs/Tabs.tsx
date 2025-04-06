import { useParams } from 'react-router-dom';
import { TabContent } from './TabContent';
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);
  // move routing between tabs inside this component

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          <TabContent tabs={tabs} tabId={tabId} />
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : <p>Please select a tab</p>}
      </div>
    </div>
  );
};
