import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
  const location = useLocation();
  const isActive = location.pathname === '/';

  return (
    <>
      <div className="navbar-brand">
        <Link to="/" className={`navbar-item ${isActive ? 'is-active' : ''}`}>
          Home
        </Link>
      </div>
    </>
  );
};
