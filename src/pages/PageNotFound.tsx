import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('..');
    }, 3000);
  }, [navigate]);

  return <h1 className="title">Page not found</h1>;
};
