import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import * as React from 'react';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const { tabsId } = useParams();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Home />
            <Tabs />
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Link to="/" className="title">
            Home page
          </Link>
          <Link to="/tabs/:id" className="title">
            Tabs page
          </Link>
          <Link to="*" className="title">
            Page not found
          </Link>
          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li key={tab.id}>
                  <Link
                    to={`/tabs/${tabsId}`}
                    data-cy="Tab"
                    className={tabsId === 'tab-1' ? 'is-active' : ''}
                  >
                    {tab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="block" data-cy="TabContent">
            {tabsId
              ? tabs.find(tab => tabsId === tab.id)?.content
              : 'Please select a tab'}
          </div>
        </div>
      </div>
    </>
  );
};
