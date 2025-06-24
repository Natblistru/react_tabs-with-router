import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { HomeTitle } from './components/HomePage';
import { Tabs } from './components/Tabs';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/" element={<HomeTitle />} />

            <Route
              path="tabs/:tabsId?"
              element={
                <>
                  <HomeTitle />
                  <Tabs />
                </>
              }
            />

            <Route path="*" element={<h1 className="title">Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
};
