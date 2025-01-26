import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  label: string;
}

export const NavItem: React.FC<Props> = ({ to, label }) => {
  const match = useMatch(`/tabs/${to}`);

  return (
    <li data-cy="Tab" className={cn({ 'is-active': match })}>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
};
