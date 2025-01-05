import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/:home?" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
