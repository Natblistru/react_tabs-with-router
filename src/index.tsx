import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, NavBar, PageNotFound, Tabs } from './Components/index';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <NavBar />
    <Routes>
      <Route path="/Home" element={<Navigate to={'/'} replace />} />
      <Route path="/" element={<Home />} />
      <Route path="tabs">
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </HashRouter>,
);
