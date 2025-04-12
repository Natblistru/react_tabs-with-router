import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabContextProvider } from './context/TabContext';
import { PageTabs } from './components/PageTabs';
import { Home } from './components/Home';

export const Root = () => (
  <HashRouter>
    <TabContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Navigate to="/" />} />
          <Route index element={<Home />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<PageTabs />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </TabContextProvider>
  </HashRouter>
);
