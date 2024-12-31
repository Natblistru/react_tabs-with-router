import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<PageNotFound />} />
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
);
