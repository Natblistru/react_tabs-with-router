
import React from 'react';

type Props = {
  path: string;
};

export const HomePage: React.FC<Props> = ({ path }) => {

  return (
    <>
      {path === '/' && <h1 className="title">Home page</h1>}
      {path === '/tabs' && <h1 className="title">Tabs page</h1>}
      {(path !== '/tabs' && path !== '/') && <h1 className="title">Page not found</h1>}
    </>
  )
}
