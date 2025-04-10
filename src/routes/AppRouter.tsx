import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { TabContent } from '../components/TabContent';
import { tabs } from './tabsOption';
import { PageNotFound } from '../pages/PageNotFound';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/tabs" element={<TabsPage />}>
      <Route
        index
        element={<TabContent tabMassage={'Please select a tab'} />}
      />
      {tabs.map(tab => (
        <Route
          key={tab.id}
          path={tab.id}
          element={<TabContent tabMassage={tab.content} />}
        />
      ))}
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
