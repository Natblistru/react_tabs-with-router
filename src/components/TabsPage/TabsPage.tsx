import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId: selectedTab } = useParams();

  const selectedTabId: Tab = tabs.find(
    tab => selectedTab === tab.id,
  ) || tabs[0];

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTab === tab.id ? 'is-active' : ''}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTabId
        ? (
          <div className="block" data-cy="TabContent">
            {selectedTabId.content}
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
    </>
  );
};
