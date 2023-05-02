import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Tabs } from './pages/Tabs';
import { NavBar } from './components/NavBar';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabsId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </div>
  </>
);
