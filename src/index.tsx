import { createRoot } from 'react-dom/client';
import { AppRouters } from './AppRouters';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppRouters />,
);
