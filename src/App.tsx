import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { PageWrapper } from './components/PageWrapper';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFount } from './components/PageNotFount';

export const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<HomePage />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId?" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<PageNotFount />} />
    </Route>
  </Routes>
);
