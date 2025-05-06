import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
// eslint-disable-next-line max-len
import { NavigationComponent } from './components/navigation/navigation.component';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <NavigationComponent />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
