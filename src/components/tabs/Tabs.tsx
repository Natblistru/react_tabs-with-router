import React from 'react';
import { Tab } from '../../types/Tab';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = Tab[];

export const Tabs = () => {
  const tabs = useOutletContext<Props>();
  const { tabId } = useParams();

  if (!tabs || tabs.length === 0) {
    return null;
  }

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
                className={classNames({
                  'is-active': tab.id === tabId,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === tabId)?.content}
        </div>
      </div>
    </div>
  );
};
