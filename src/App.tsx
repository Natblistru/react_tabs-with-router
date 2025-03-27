import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TabsPage from './pages/TabsPage';
import Tabs from './components/Tabs';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);

export default App;
