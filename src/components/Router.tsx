import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { PageNotFound } from '../pages/PageNotFound';
import { TabsPage } from '../pages/TabsPage';

export const Router = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
);
