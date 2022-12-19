import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = React.memo(() => {
  const { id } = useParams();

  const isSelected = (tab: Tab) => tab.id === id;
  const activeTab = () => tabs.find(tab => tab.id === id);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isSelected(tab) })}
              key={tab.id}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab() ? activeTab()?.content : 'Please select a tab'}
      </div>
    </div>
  );
});
