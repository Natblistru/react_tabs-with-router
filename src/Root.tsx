import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { TabsProvider } from './store/TabsContext';
import { App } from './App';

export const Root = () => (
  <Router>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </TabsProvider>
  </Router>
);
