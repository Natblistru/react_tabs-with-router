import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { NotFoundPage } from '../pages/NotFound';
import { TabsPage } from '../pages/Tabs';

export const RouterPaths = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<Navigate to="/" />} />
    <Route path="tabs">
      <Route index element={<TabsPage />} />
      <Route path=":tabId" element={<TabsPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
