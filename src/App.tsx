import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tabs from './pages/Tabs';
import Navbar from './components/Navbar';
import React from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/tabs">
              <Route index element={<Tabs tabs={tabs} />} />

              <Route path=":tabId" element={<Tabs tabs={tabs} />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/home" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
