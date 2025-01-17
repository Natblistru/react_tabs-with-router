import classNames from 'classnames';

import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export function Tabs() {
  const { tabId } = useParams<string>();

  const tabContent: string | undefined = useMemo(() => {
    return tabs.find(tab => tabId === tab.id)?.content;
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': tab.id === tabId })}
                key={tab.id}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </>
  );
}
