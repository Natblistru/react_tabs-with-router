import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { TabsProvider } from './store/tabsContext';

export const Root = () => {
  return (
    <HashRouter>
      <TabsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<Navigate to=".." />} />
            <Route path="tabs/:tabId?">
              <Route index element={<TabsPage />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Route>
        </Routes>
      </TabsProvider>
    </HashRouter>
  );
};
