import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { App } from './App';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":param?" element={<HomePage />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  );
};
