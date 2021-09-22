import React from 'react';

import './App.scss';
import { Header } from './components/Header/Header';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>
      <h1>Note fide page</h1>
    </Switch>
  </div>
);

export default App;
