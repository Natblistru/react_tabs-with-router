import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { TabsPages } from './TabsPages';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="tabs/:tab?" element={<TabsPages />}>
          <Route path="tab-1" />
          <Route path="tab-2" />
          <Route path="tab-3" />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
