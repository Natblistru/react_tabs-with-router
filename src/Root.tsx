import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './pages/404';
import { Homepage } from './pages/Homepage';
import { TabsPage } from './pages/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
