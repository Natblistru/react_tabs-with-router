import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { TabContent } from './pages/TabContent';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/:param?" element={<HomePage />} />
        <Route path="tabs/:tabId?" element={<TabsPage />}>
          <Route path=":tabId?" element={<TabContent />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
