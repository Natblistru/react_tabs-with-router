import { Outlet } from 'react-router-dom';

export const Tabs = () => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <Outlet />
    </div>
  );
};
