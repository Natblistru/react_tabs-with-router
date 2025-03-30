import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': selectedTab?.id === tab.id,
                })}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
