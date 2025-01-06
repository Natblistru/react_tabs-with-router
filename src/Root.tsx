import {
  Route,
  Routes,
  Navigate,
  HashRouter as Router,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { PageNotFound } from './pages/PageNotFound';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs/:tabId?">
            <Route index element={<Tabs />} />
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};
