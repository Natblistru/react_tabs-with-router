import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function PageNotFound() {
  const location = useLocation();

  if (location.pathname === '/home') {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h1 className="title">Page not found</h1>
    </div>
  );
}
