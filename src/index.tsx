import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Router } from './Router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Router />
  </HashRouter>,
);
