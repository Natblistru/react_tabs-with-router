import React from 'react';
import { Tab } from '../types/Tab';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;
};

const TabItem: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;
  const { pathname } = useLocation();

  const isOpen = pathname.slice(1) === id;

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': isOpen })}>
      <a href={`#/${id}`}>{title}</a>
    </li>
  );
};

export default TabItem;
