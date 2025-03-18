import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const [activeTabId, setActiveTabId] = useState('');
  const currentTab = tabs.find(tab => tab.id === activeTabId);
  const tabIds = tabs.map(tab => tab.id);

  useEffect(() => {
    if (tabId) {
      if (tabIds.includes(tabId)) {
        setActiveTabId(tabId);
      } else {
        setActiveTabId('');
      }
    }
  }, [tabId, setActiveTabId, tabIds]);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div data-cy="TabsComponent">
            <div className="tabs is-boxed">
              <ul>
                {tabs.map(tab => (
                  <li
                    className={classNames('', {
                      'is-active': tab.id === activeTabId,
                    })}
                    data-cy="Tab"
                    key={tab.id}
                  >
                    <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                      {tab.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="block" data-cy="TabContent">
              {currentTab ? currentTab.content : 'Please select a tab'}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};
