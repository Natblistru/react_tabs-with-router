import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs">
      <ul className="tabs__links">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={`tabs__item ${tab.id === tabId ? 'is-active' : ''}`}
          >
            <Link to={`/tabs/${tab.id}`} className="tabs__link">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="tabs__content">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
