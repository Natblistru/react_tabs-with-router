import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
