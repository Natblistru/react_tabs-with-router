import { App } from './App';

import { TabPage } from './pages/TabPage';
import { HomePage } from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import React from 'react';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs" element={<TabPage />}>
          <Route index element={<TabPage />} />
          <Route path=":tabId" element={<TabPage />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
