import React, { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';
import { ActiveTab } from './ActiveTab';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);

  const searchActiveTab = () => tabs.find(tab => tabId === tab.id);
  const activeTab = useMemo(searchActiveTab, [tabId, tabs]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link to={'../' + tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <ActiveTab tab={activeTab} />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
