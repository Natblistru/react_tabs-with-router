import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { AppProvider } from './Context/AppContext';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { PageNotFound } from './pages/PageNotFound';

export const Root = () => {
  return (
    <HashRouter>
      <AppProvider>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AppProvider>
    </HashRouter>
  );
};
