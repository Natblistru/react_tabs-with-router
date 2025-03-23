import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { tabs } from './data/tabs';
import { Nav } from './components/nav/Nav';

export const App = () => {
  return (
    <>
      <Nav />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
            <Route path="/tabs/:tabId" element={<TabsPage tabs={tabs} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
