import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ErrorPage, Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { App } from './App';
import { tabs } from './api/tables';
import { TabContent } from './types/Tab';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<Tabs />}>
            <Route index element={'Please select a tab'} />
            <Route path=":tabsId?" element={<TabContent allTabs={tabs} />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
