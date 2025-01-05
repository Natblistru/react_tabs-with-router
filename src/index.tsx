import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const html = document.querySelector('html');

html?.classList.add('has-navbar-fixed-top');

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
