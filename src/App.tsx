import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Tabs from './pages/Tabs';
import Nav from './components/Nav';

export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Nav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h1 className="title">Page not found</h1>
                <p>Please select a tab</p>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  </>
);
