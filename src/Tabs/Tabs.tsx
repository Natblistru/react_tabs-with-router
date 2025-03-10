import { NavLink, useParams } from 'react-router-dom';

export const Tabs = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];


  
  const { tabId } = useParams();
  const tabContent = tabId ? tabs.find(t => t.id === tabId)?.content : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent ? tabContent : <>Please select a tab</>}
      </div>
    </>
  );
};
