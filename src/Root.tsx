import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs/:tabId?" element={<Tabs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
