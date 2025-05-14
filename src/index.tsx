import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<Tabs />}>
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </HashRouter>,
);
