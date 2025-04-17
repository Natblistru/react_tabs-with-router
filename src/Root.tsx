import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { GlobalProvider } from './GlobalProvider/GlobalProvider';
import { Home } from './Components/Pages/Home';
import { Tabs } from './Components/Pages/Tabs';
import { NotFound } from './Components/Pages/NotFound';

export const Root = () => {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </Router>
  );
};
