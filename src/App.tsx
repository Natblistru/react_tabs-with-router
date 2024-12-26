import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Navigation } from './components/Navigation';

export const App = () => (
  <>
    <Navigation />
    <div className="section">
      <Outlet />
    </div>
  </>
);
