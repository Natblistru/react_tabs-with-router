import classNames from 'classnames';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { tabs } from '../../api/tables';

export const Tabs = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': location.pathname === `/tabs/${tab.id}`,
                })}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};
