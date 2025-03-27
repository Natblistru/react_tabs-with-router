import { Outlet } from 'react-router-dom';

const TabsPage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <Outlet />
    </div>
  </div>
);

export default TabsPage;
