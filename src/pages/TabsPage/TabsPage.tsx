import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              onClick={() => setActiveTab(tab)}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId === undefined ? 'Please select a tab' : ''}

        {activeTab?.content}
      </div>
    </div>
  );
};
