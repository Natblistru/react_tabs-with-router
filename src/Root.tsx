import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFound } from './components/NotFound';
import { SelectedTab } from './components/SelectedTab';
import { TabsProvider } from './contexts/TabsContext';

export const Root = () => (
  <HashRouter>
    <TabsProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path='home' element={<Navigate to="/" replace />}></Route>
          <Route path="tabs" >
            <Route path=":tabId?" element={<TabsPage />}>
              <Route path='' element={<SelectedTab />}></Route>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>

      </Routes>
    </TabsProvider>
  </HashRouter>
);
