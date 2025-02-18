import { createRoot } from 'react-dom/client';
import {
  Route,
  HashRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './component/TabsPage';
import { HomePage } from './page/HomePage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>,
);
