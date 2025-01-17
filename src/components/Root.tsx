import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from './HomePage';
import { Tabs } from './Tabs';
import { NotFound } from './NotFound';

export function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
