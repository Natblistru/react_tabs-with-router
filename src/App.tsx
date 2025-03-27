import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Tabs from './pages/Tabs';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/tabs" element={<Tabs />}>
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
