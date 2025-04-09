import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import React from 'react';
import classNames from 'classnames';
import { RouteParts } from '../../types/RouteParts';

interface Props {
  tabList: Tab[];
  currentTabId: string | undefined;
}

export const TabsList: React.FC<Props> = ({ tabList, currentTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabList.map(tab => {
          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': currentTabId === tab.id,
              })}
            >
              <Link to={`${RouteParts.Tabs}/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
