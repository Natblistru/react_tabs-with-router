import React, { memo } from 'react';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;

  activeTabId: string | undefined;
};

export const TabItem: React.FC<Props> = memo(({ tab, activeTabId }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': activeTabId === tab.id })}
    >
      {activeTabId === tab.id ? (
        <Link to="">{tab.title}</Link>
      ) : (
        <Link to={`../${tab.id}`}>{tab.title}</Link>
      )}
    </li>
  );
});

TabItem.displayName = 'TabsList';
