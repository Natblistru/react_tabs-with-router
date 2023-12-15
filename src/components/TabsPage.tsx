import classNames from 'classnames';
import {
  NavLink, Outlet,
} from 'react-router-dom';
import { useState } from 'react';

export const TabsPage = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabs = [
    { id: 'tab-1', content: 'Tab 1' },
    { id: 'tab-2', content: 'Tab 2' },
    { id: 'tab-3', content: 'Tab 3' },
  ];

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': activeTab === tab.id,
              })}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.content}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
      {activeTab ? null : (
        <div className="block" data-cy="TabContent">Please select a tab</div>
      )}
    </>
  );
};
