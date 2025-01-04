import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import TabsPage from './Components/TabsPage';
import Layout from './Components/Layout';
import TabContent from './Components/TabContent';
import NotFound from './Components/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=":param?" element={<HomePage />} />
        <Route path="/tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabContent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
