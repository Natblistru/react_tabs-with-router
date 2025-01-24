import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Root } from './Root';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Root />} />
    </Routes>
  );
};
