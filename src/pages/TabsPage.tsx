import { NavLink, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../routes/tabsOption';

export const TabsPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': pathname.endsWith(tab.id) })}
            >
              <NavLink to={'/tabs/' + tab.id}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
      {/* <div className="block" data-cy="TabContent">
        Please select a tab
      </div> */}
    </div>
  );
};
