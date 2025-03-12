/* eslint-disable no-console */
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();
  const navigate = useNavigate();

  const activeTab = tabs.find(tab => tab.id === tabId);

  if (tabId && !activeTab) {
    navigate('/tabs/tab-1');
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? <h2>{activeTab.content}</h2> : <p>Please select a tab</p>}
      </div>
    </>
  );
};

export default TabsPage;
