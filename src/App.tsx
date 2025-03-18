import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { useState } from 'react';
import { Nav } from './components/Nav';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('');

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Nav />

      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="/"
          element={
            <div className="section">
              <div className="container">
                <h1 className="title">Home page</h1>
              </div>
            </div>
          }
        />

        <Route path="tabs">
          <Route
            index
            element={
              <TabsPage
                tabs={tabs}
                activeTabId={activeTabId}
                setActiveTabId={setActiveTabId}
              />
            }
          />

          <Route
            path=":tabId"
            element={
              <TabsPage
                tabs={tabs}
                activeTabId={activeTabId}
                setActiveTabId={setActiveTabId}
              />
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <div className="section">
              <div className="container">
                <h1 className="title">Page not found</h1>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};
