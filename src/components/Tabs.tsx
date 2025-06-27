import * as React from 'react';
import { Link } from 'react-router-dom';

export const Tabs: React.FC = () => {
  return (
    <>
      <Link to="/tabs" className="navbar-item">
        Tabs
      </Link>
    </>
  );
};
