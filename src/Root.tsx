import {
  Route,
  Routes,
  Navigate,
  HashRouter as Router,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs/:tabId?">
            <Route index element={<TabsPage />} />
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};
