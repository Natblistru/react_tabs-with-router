import {
  Routes,
  Navigate,
  Route,
  HashRouter as Router,
} from 'react-router-dom';
import { TabsPage } from './Pages/TabsPage';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { ErrorPage } from './Pages/ErrorPage';

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
