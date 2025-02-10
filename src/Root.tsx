import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { TabsList } from './components/TabsList';
import { NotFoundPage } from './components/NotFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsList />} />
          <Route path=":tabId" element={<TabsList />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
