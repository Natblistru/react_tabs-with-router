import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';

export const Root = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="/tabs" element={<TabsPage />} />
    <Route path="/tabs/:tabId" element={<TabsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
