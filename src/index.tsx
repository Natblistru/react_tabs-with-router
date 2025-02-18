import { createRoot } from 'react-dom/client';
import {
  Route,
  HashRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsList } from './component/TabsList';
import { HomePage } from './page/HomePage';
// import { TabsPage } from './page/TabsPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsList />}>
          <Route index element={<TabsList />} />
          <Route path=":tabId" element={<TabsList />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>,
);
