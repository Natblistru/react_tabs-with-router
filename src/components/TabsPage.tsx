import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface TabsPageProps {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs, onTabSelected }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  // Find tab by tabId from URL
  const currentTab = tabs.find(tab => tab.id === tabId) || null;

  useEffect(() => {
    // If tabId is valid, update the selected tab
    if (currentTab) {
      onTabSelected(currentTab);
    } else if (tabId) {
      // If invalid tabId, navigate to "/tabs"
      navigate('/tabs');
    }
  }, [tabId, currentTab, onTabSelected, navigate]);

  return (
    <>
      <h1 className="title">Tabs Page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === currentTab?.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
