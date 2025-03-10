import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './Navigation/Navigation';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { NavigateToHome } from './Home/NavigateToHome';
import { Tabs } from './Tabs/Tabs';
import { NotFound } from './NotFound/NotFound';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<NavigateToHome />}></Route>
          <Route path="/tabs" element={<Tabs />}>
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  </>
);
