import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId } = useParams();

  useEffect(() => {
    document.title = 'Tabs page';
  }, []);

  const selectedTab = tabs.find(tab => tab.id === tabId);

  const shouldShowDefault = !tabId || !selectedTab;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {shouldShowDefault ? 'Please select a tab' : selectedTab.content}
      </div>
    </>
  );
};

export default TabsPage;
