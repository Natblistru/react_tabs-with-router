import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';
import { TabsContextProvider } from './context/TabsContext';

export const Root = () => {
  return (
    <TabsContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Navigate to={'/'} />} />
            <Route index element={<HomePage />} />
            <Route path="tabs">
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </TabsContextProvider>
  );
};
