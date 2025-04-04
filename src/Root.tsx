import { TabsProvider } from './contexts/TabsProvider';
import { TabsRouter } from './components/Router';

export const Root: React.FC = () => (
  <TabsProvider>
    <TabsRouter />
  </TabsProvider>
);
