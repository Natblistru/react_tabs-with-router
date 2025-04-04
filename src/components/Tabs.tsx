import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const Tabs = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id ===  tabId)
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab ) => (
              <li data-cy="Tab" key={tab.id} className={classNames({ "is-active": tab.id === tabId })}>
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
              ))}
          </ul>
        </div>
        <Outlet />
        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : <div>Please select a tab</div>}
        </div>
      </div>
    </div>
  );
};
