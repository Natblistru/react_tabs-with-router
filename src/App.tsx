import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Nav } from './components/Nav';
import { AppContent } from './components/AppContent';

export const App = () => {
  return (
    <>
      <Nav />
      <AppContent />
    </>
  );
}
