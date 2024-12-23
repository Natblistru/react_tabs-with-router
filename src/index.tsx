import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>,
);