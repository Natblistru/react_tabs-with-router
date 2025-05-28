import { useEffect } from 'react';

export const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return <h1 className="title">Page not found</h1>;
};
