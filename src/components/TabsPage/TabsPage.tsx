import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { Tab } from '../../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  className={classNames({
                    'is-active': id === selectedTab?.id,
                  })}
                  data-cy="Tab"
                >
                  <Link to={`/tabs/${id}`} data-cy="TabLink">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab
            ? selectedTab.content
            : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
