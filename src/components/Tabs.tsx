import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Tabs: React.FC = () => {
  const location = useLocation();
  const isActive = location.pathname.startsWith('/tabs');

  return (
    <>
      <Link to="/tabs" className={`navbar-item ${isActive ? 'is-active' : ''}`}>
        Tabs
      </Link>
    </>
  );
};
