import { Navigate, useParams } from 'react-router-dom';

export const PageNotFound = () => {
  const { '*': validPath } = useParams();

  if (validPath === 'home') {
    return <Navigate to=".." />;
  }

  return <h1 className="title">Page not found</h1>;
};
