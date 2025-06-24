
import React from 'react';
import { useLocation} from 'react-router-dom';

type Props = {

};

export const HomeTitle: React.FC<Props> = () => {
  const location = useLocation();
  const validPage = ['/tabs/tab-1', '/tabs/tab-2', '/tabs/tab-3', '/tabs', '/'];

  const isValid = validPage.includes(location.pathname)

  return (
    <>
    {location.pathname === '/' && (
      <h1 className="title">Home page</h1>
    )}

    {location.pathname !== '/' && isValid && (
      <h1 className="title">Tabs page</h1>
    )}

    {!isValid && location.pathname !== '/' && (
      <h1 className="title">Page not found</h1>
    )}
  </>
  );
};
