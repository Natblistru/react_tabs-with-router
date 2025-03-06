import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { TabsProvider } from './store/TabsContext';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { PageNotFound } from './pages/PageNotFound';

export const Root = () => (
  <Router>
    <TabsProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="home" element={<Navigate to={'/'} />} />
          <Route index element={<HomePage />} />
          <Route path='tabs'>
            <Route path=':tabId?' element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </TabsProvider>
  </Router>
);
