import React from 'react';
import 'bulma';
import { Link, useMatch } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const match = useMatch('/tabs/:tabId');
  const selectedtabId = match?.params.tabId;

  const printContent = (tabId: string | undefined) => {
    return tabs.find(tab => tab.id === tabId)?.content;
  };

  return (
    <>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className="mx-2 is-uppercase">
              <Link
                to={`/tabs/${tab.id}`}
                className="button"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="content is-size-2">
        {printContent(selectedtabId)}
      </div>
    </>
  );
};
