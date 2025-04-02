import { useEffect, useState } from 'react';
import { Tabs } from '../components/Tabs';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const [selectedId, setSelectedId] = useState('tab-1');
  let content = tabs.find(tab => tab.id === selectedId)?.content;
  const { tabId } = useParams();

  if (tabId && tabId !== selectedId) {
    content = 'please select a tab';
  }

  useEffect(() => {
    setSelectedId(tabId || 'tab-1');
  }, [selectedId]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': selectedId === tab.id })}
              >
                <NavLink
                  to={`${tab.id}`}
                  onClick={() => setSelectedId(tab.id)}
                  style={() => ({ color: tab.id === selectedId ? 'pink' : '' })}
                >
                  {tab.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Tabs content={content} />
      </div>
    </div>
  );
};
