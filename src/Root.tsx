import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import PageNotFound from './pages/PageNotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to=".." replace />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
