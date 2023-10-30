import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || null;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <Outlet />

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {
        selectedTab
          ? (
            <div className="block" data-cy="TabContent">
              {selectedTab?.content}
            </div>
          )
          : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )
      }
    </>
  );
};
