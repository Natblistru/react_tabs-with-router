import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';

import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />

        <Route index element={<Home />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
