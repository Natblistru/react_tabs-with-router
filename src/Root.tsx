import {
  HashRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from 'react-router-dom';
import { DataProvider } from './store/DataProvider';
import { App } from './App';
import { HomePage } from './pages/home-page/home.page';
import { TabsPage } from './pages/tabs-page/tabs.page';
import { NotFoundPage } from './pages/not-found-page/notFound.page';

export const Root = () => {
  return (
    <HashRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="tabs" element={<TabsPage />}>
              <Route index element={<TabsPage />} />
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </DataProvider>
    </HashRouter>
  );
};
