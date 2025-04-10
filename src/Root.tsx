import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { Tab } from './pages/Tab';
import { Page404 } from './pages/Page404';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<Tabs />}>
          <Route index element={<Tab />} />
          <Route path=":tabId" element={<Tab />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </Router>
);
