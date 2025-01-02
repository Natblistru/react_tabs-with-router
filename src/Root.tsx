import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { PageNotFound } from './pages/PageNotFound';
import { useEffect } from 'react';

export const Root = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace={true} />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
