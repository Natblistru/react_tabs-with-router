import { HashRouter } from 'react-router-dom';
import { TabsProvider } from './context/TabsProvider';
import { Router } from './components/Router';

export const Root = () => (
  <HashRouter>
    <TabsProvider>
      <Router />
    </TabsProvider>
  </HashRouter>
);
