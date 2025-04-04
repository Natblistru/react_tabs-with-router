import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './src/App';
import { Home } from './src/components/Home';
import { Tabs } from './src/components/Tabs';
import { Navigate } from 'react-router-dom';

export const container = document.getElementById('root') as HTMLElement;
export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route
          path="*"  element={<h1 className="title">Page not found</h1>}
        />
      </Route>
    </Routes>
  </HashRouter>
);
