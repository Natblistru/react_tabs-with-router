import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavigationLink } from './NavLinkPage/NavLinkPage';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <NavigationLink />
    <div className="section">
      <Outlet />
    </div>
  </>
);
