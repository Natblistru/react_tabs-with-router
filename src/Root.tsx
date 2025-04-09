import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { RouteParts } from './types/RouteParts';
import { UnknownPage } from './pages/UnknownPage';
import { App } from './App';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RouteParts.Root} element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path={RouteParts.Home}
            element={<Navigate to={RouteParts.Root} />}
          />
          <Route path={RouteParts.Tabs}>
            <Route index element={<TabsPage />} />
            <Route path={`${RouteParts.TabId}`} element={<TabsPage />} />
          </Route>
          <Route path={RouteParts.NotFound} element={<UnknownPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
