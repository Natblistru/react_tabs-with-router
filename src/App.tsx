import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Link } from 'react-router-dom';

export const App: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="App">
      <nav>
        <ul>
          <li className={isActive('/') ? 'is-active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/tabs') ? 'is-active' : ''}>
            <Link to="/tabs">Tabs</Link>
          </li>
        </ul>
      </nav>

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
  );
};

