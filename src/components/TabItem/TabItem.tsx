import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import React from 'react';
import cn from 'classnames';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const { title, id } = tab;

  const validActiveTabId = tabId ? tabId.toString() : '';

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': tab.id === validActiveTabId,
      })}
    >
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
