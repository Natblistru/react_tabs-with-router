import { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return <h1 className="title">Page not found</h1>;
};

export default NotFoundPage;
