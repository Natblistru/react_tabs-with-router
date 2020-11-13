import React, { useMemo } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = useMemo(
    () => tabs.find(tab => tab.id === tabId),
    [tabId],
  );

  return (
    <div className="content">
      <ul>
        {
          tabs.map(tab => (
            <li key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                className="button"
                activeClassName="is-info"
              >
                {tab.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <p>
        {currentTab
          ? currentTab.content
          : 'Please select a tab'
        }
      </p>
    </div>
  );
};
