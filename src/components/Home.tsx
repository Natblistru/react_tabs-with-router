import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-active">
          Home
        </Link>
      </div>
    </>
  );
};
