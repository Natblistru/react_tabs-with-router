import { HashRouter } from 'react-router-dom';
import { App, tabs } from './App';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NotFound } from './component/NotFound';
import { HomePage } from './component/HomePage';
import { TabsPages } from './component/TabsPages';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route index element={<HomePage />} />

          <Route path="/tabs">
            <Route index element={<TabsPages tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPages tabs={tabs} />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
