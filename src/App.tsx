import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFound';

export const App = () => {

  const location = useLocation();

  return (
    <>
      < nav className="navbar is-light is-fixed-top is-mobile has-shadow" data-cy="Nav">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`} >
              Home
            </Link>
            <Link to="/tabs" className={`navbar-item ${location.pathname === '/tabs' || location.pathname.startsWith('/tabs/') ? 'is-active' : ''}`} >
              Tabs
            </Link>
          </div>
        </div>
      </nav >

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/tabs/:tabId" element={<TabsPage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
