import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';
import Tabs from './components/Tabs';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
