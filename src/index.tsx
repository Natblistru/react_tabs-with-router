import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Root } from './components/Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Root />
  </HashRouter>,
);
