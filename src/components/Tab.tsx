import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  tab: { id: string; title: string; content: string };
  tabId?: string;
};
export const Tab: React.FC<Props> = ({ tab, tabId }) => {
  return (
    <li
      key={tab.id}
      data-cy="Tab"
      className={cn({ 'is-active': tab.id === tabId })}
    >
      <NavLink to={`/tabs/${tab.id}`} end>
        {tab.title}
      </NavLink>
    </li>
  );
};
