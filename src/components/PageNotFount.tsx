import { Navigate, useLocation } from 'react-router-dom';

export const PageNotFount = () => {
  const location = useLocation();

  if (location.pathname === '/home') {
    return <Navigate to="/" />;
  }

  return <h1 className="title">Page not found</h1>;
};
