import { NavLink, Outlet, useLocation } from 'react-router-dom';

interface Props {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const location = useLocation();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const isActive = location.pathname.endsWith(tab.id);

              return (
                <li
                  key={tab.id}
                  className={isActive ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <NavLink to={`./${tab.id}`}>{tab.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
