import { Link, useLocation, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabId = tabs.find(tab => tab.id === tabId);
  const location = useLocation();

  let basePath = location.pathname;

  if (tabId && basePath.includes(tabId)) {
    basePath = basePath.replace(`/${tabId}`, '');
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === activeTabId?.id ? 'is-active' : ''}
              >
                <Link to={`${basePath}/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {!activeTabId ? 'Please select a tab' : activeTabId?.content}
        </div>
      </div>
    </>
  );
};
