import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { MainRoutes } from './components/MainRoutes/MainRoutes';

export const App = () => (
  <>
    <NavBar />
    <MainRoutes />
  </>
);
