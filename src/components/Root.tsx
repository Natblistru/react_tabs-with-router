import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../components/HomePage';
import { TabsPage } from '../components/TabsPage';
import { PageNotFound } from '../components/PageNotFound';
import { tabs } from '../api/todos';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs">
          <Route index element={<TabsPage tabs={tabs} />} />
          <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
