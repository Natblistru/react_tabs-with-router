import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab?.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
