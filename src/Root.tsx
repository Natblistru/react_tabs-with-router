import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { Tabs } from './components/Tabs';
import { NavBar } from './components/NavBar';

export const Root = () => (
  <>
    <NavBar />

    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<Tabs />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </>
);
