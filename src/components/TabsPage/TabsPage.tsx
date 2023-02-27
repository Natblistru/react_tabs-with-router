import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? (selectedTab.content)
          : 'Please select a tab'}
      </div>
    </>
  );
};
