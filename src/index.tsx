import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import TabsPage from './components/TabsPage';
import { App } from './App';
import Title from './components/Title';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Title text="Home page" />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
          <Route path="*" element={<Title text="Page not found" />} />
        </Route>
        <Route path="home" element={<Navigate to={'/'} />} />
        <Route path="*" element={<Title text="Page not found" />} />
      </Route>
    </Routes>
  </HashRouter>,
);
