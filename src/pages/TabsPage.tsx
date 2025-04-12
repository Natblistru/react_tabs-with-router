import { Routes, Route } from 'react-router-dom';
import TabsComponent from './TabsComponent';

const TabsPage = () => {
  return (
    <Routes>
      <Route index element={<TabsComponent />} />
      <Route path=":tabId" element={<TabsComponent />} />
    </Routes>
  );
};

export default TabsPage;
