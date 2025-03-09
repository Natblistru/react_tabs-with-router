import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';
import { useState } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-active">
              Home
            </Link>
            <Link to="/tabs" className="navbar-item">
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {/* Для відображення на сторінці різного вмісту в залежності від адреси використовуються компоненти Routes та Route: */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tabs">
              <Route
                index
                element={
                  <TabsPage
                    tabs={tabs}
                    onTabSelected={tab => setSelectedTabId(tab.id)}
                  />
                }
              />
              <Route
                path=":tabId"
                element={
                  <TabsPage
                    tabs={tabs}
                    onTabSelected={tab => setSelectedTabId(tab.id)}
                  />
                }
              />
            </Route>
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
          {/* <h1 className="title" pagenot found></h1> */}

          {/* Here is Tab1, Tab2, Tb3 */}

          {/* Block please select tab */}
        </div>
      </div>
    </>
  );
};
