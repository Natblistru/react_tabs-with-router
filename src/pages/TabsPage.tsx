import React, { useMemo } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
//import { Tab } from '../types/Tab';
interface Options {
  isActive: boolean;
}
const getLinkStyle = ({ isActive }: Options) => ({
  color: isActive ? 'green' : '',
});
const getLinkActive = ({ isActive }: Options) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const TabsPage = () => {
  const { tabsId } = useParams();

  const tabs = useMemo(() => {
    return [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ];
  }, []);

  const selectedTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({
                  'is-active': id === tabsId,
                })}
              >
                <NavLink
                  to={`/tabs/${id}`}
                  style={getLinkStyle}
                  className={getLinkActive}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <p style={{ color: 'violet' }}>
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </p>
      </div>
      <Outlet />
    </>
  );
};
