import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/home';
import { Tabs } from './pages/tabs';

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<Tabs />}>
            <Route path=":tabId" element={<Tabs />} />
          </Route>
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </HashRouter>
    ,
  </>,
);
