import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../types/Tab';

export const TabsPage: React.FC = () => {
  const { id } = useParams();
  const selectedTab = id ? tabs.find(tab => id === tab.id) : null;

  return (
    <div>
      {selectedTab ? (
        <h1 className="title">{selectedTab.title}</h1>
      ) : (
        <h1 className="title">Please select a tab</h1>
      )}

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="Tab"
                className={id === tab.id ? 'is-active' : ''}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
