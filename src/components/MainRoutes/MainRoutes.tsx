import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { TabsPage } from '../TabsPage/TabsPage';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export const MainRoutes = () => (
  <div className="section">
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </div>
);
