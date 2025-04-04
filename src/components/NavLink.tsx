import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<Props> = ({ to, children }) => {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to === '/tabs' && location.pathname.startsWith('/tabs/'));

  return (
    <Link to={to} className={`navbar-item ${isActive ? 'is-active' : ''}`}>
      {children}
    </Link>
  );
};
