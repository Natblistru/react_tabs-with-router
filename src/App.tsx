import React, { FC } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <HashRouter>
      <nav>
        <ul className="list">
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabs/">Tabs</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/tabs/:tabId?"
          render={({ match }) => <TabsPage tabs={tabs} tabId={match.params.tabId} />}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
