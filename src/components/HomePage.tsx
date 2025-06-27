import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home page';
  }, []);

  return <h1 className="title">Home page</h1>;
};

export default HomePage;
