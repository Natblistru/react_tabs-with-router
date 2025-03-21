import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './page/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<Navigate to={'/'} replace />} />
        <Route path="tabs" element={<Tabs />}>
          <Route index element={<p>Please select a tab</p>} />
          <Route path=":tabId" element={<Outlet />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
