import React from 'react';
import { Tabs } from '../components/Tabs';
import { Routes, Route } from 'react-router-dom';
export const TabsPage: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Tabs />} />
      <Route path=":tabId" element={<Tabs />} />
    </Routes>
  );
};
