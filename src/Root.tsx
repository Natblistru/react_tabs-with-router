import { Route, HashRouter, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { PageNotFound } from './pages/PageNotFound';
import { List } from './pages/List';
import { Provider } from './services/services';
import { TabContent } from './pages/TabContent';

export const Root = () => {
  return (
    <HashRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="tabs" element={<Tabs />}>
              <Route path="" element={<List />}>
                <Route path=":id" element={<TabContent />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  );
};
