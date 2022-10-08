import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';
import { Navigation } from './components/Navigation';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={(
                <h1 className="title">Home page</h1>
              )}
            />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="/tabs">
              <Route
                index
                element={(
                  <Tabs
                    tabs={tabs}
                  />
                )}
              />
              <Route
                path=":tabId"
                element={(
                  <Tabs
                    tabs={tabs}
                  />
                )}
              />
            </Route>
            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
          </Routes>

        </div>
      </div>
    </>
  );
};
