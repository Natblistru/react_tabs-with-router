import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';
import { Tabs } from './components/Tabs';
import { Title } from './components/Title';
import { NotFoundPage } from './components/NotFoundPage';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';

export const App = () => (
  <HashRouter>
    <Routes>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Title />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
