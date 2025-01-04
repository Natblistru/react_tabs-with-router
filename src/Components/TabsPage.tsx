import { NavLink, Outlet, useParams } from 'react-router-dom';
import tabs from '../api/tabs.json';
import cn from 'classnames';

const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              data-cy="Tab"
              className={cn({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <NavLink
                to={tab.id}
                className={({ isActive }) => cn({ 'is-active': isActive })}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {selectedTab ? (
        <Outlet />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};

export default TabsPage;
