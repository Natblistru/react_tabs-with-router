import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const location = useLocation();
  const isTabSelected = location.pathname === '/tabs';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = location.pathname.endsWith(`/${tab.id}`);

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={isActive ? 'is-active' : ''}
              >
                <Link to={tab.id}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {isTabSelected ? (
        <div data-cy="TabContent" className="block">
          Please select a tab
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
