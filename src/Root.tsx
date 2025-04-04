import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { AppProvider } from './Context/AppContext';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { PageNotFound } from './pages/PageNotFound';

export const Root = () => {
  return (
    <HashRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route index element={<HomePage />} />
            <Route path="tabs">
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AppProvider>
    </HashRouter>
  );
};
