import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { RouteParts } from './types/RouteParts';
import { UnknownPage } from './pages/UnknownPage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RouteParts.Home} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={RouteParts.Tabs}>
            <Route index element={<TabsPage />} />
            <Route path={`:${RouteParts.TabId}?`} element={<TabsPage />} />
          </Route>
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
