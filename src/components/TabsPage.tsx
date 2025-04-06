import React, { useContext } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { TabsContext } from '../contexts/TabsContext';
import classNames from 'classnames';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const { tabs } = useContext(TabsContext);

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
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
