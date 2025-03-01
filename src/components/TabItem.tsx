import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  selectedTab: string | undefined;
};
export const TabItem: React.FC<Props> = ({ tab, selectedTab }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': selectedTab === id })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
