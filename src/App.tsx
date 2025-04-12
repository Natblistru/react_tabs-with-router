import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <>
    <nav className="navbar is-light is-fixed-top has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/tabs" className="navbar-item">
            Tabs
          </a>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tabs/*" element={<TabsPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
