import {
  Route,
  Navigate,
  Routes,
  HashRouter as Router,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './TabsPage/TabsPage';
import { HomePage } from './HomePage/HomePage';
import { ErrorPage } from './ErrorPage/ErrorPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
