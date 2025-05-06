import React from 'react';
import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;
};

export const TabComponent: React.FC<Props> = ({ tab }) => {
  const { title, id } = tab;

  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': tab.id === tabId })}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
