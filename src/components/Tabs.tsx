import React from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  activeTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <React.Fragment>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={`${activeTabId === tab.id ? 'is-active' : ''}`}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
