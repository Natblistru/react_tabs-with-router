import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Tabs } from './components/Tabs';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
