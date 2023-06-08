import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/index';
import { TabsPage } from './pages/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}

    <NavBar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="home"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />

          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>

          <Route
            path="*"
            element={<h1 className="title"><p>hello </p></h1>}
          />
        </Routes>
      </div>
    </div>
  </>
);
