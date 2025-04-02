import { useEffect, useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Link, NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  let content = tabs.find(tab => tab.id === tabId)?.content;

  if (!tabId) {
    content = 'please select a tab';
  }

  // useEffect(() => {
  //   setSelectedId(tabId || 'tab-1');
  // }, [tabId]);

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
                className={classNames({ 'is-active': tabId === tab.id })}
              >
                <Link to={`${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Tabs content={content} />
      </div>
    </div>
  );
};
