import { createRoot } from 'react-dom/client';
import { MainRouts } from './router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <MainRouts />,
);
