import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';

type TabsProps = {
  tabs: Tab[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { activeTabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTab?.id })}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
