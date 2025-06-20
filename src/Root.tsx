import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './pages/Tabs';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route index element={<Home />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
