// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from './src/App';
import { TabsPage } from './src/pages/TabsPage';
import { HomePage } from './src/pages/HomePage';
import React from 'react';

export const Root = () => (
  //<HashRouter>
  <Routes>
    {/*<Route path="/home" element={<App />}>
      <Route index element={<HomePage />} />
    </Route>*/}
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabsId" element={<TabsPage />} />
      </Route>
      <Route path="/*" element={<h1 className="title">Page not found</h1>} />
    </Route>
  </Routes>
  //</HashRouter>
);
