import { Navigate, HashRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage/TabsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);
