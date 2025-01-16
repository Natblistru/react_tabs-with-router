import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage, TabsPage, NotFoundPage } from './pages';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="home" element={<Navigate to="/" replace={true} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
