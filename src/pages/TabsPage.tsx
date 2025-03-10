import { useState } from 'react';
import { Tab } from '../types/Tab';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = ({}) => {
  const { tabId } = useParams<{ tabId: string }>();
  const [activeTab, setActiveTab] = useState<string | null>(tabId || null);

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;
  const selectedTab = tabs.some(tab => tab.id === activeTab);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              onClick={() => setActiveTab(tab.id)}
              data-cy="Tab"
              className={cn({
                'is-active': activeTab === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="tabContent">
        {selectedTab ? (
          <div className="TabContent" data-cy="TabContent">
            {activeTabContent}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </>
  );
};
