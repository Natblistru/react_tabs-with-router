import React from 'react';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  tabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
