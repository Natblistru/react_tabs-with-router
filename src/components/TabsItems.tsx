import React from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;
  selectedTab: Tab | undefined;
};

export const TabsItem: React.FC<Props> = ({ tab, selectedTab }) => {
  return (
    <li
      data-cy="Tab"
      key={tab.id}
      className={classNames({
        'is-active': selectedTab?.id === tab.id,
      })}
    >
      <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
        {tab.title}
      </Link>
    </li>
  );
};
