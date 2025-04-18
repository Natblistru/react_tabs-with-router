import classNames from 'classnames';
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TabContex } from '../context/TabContext';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabContex);

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>
        </div>
      </section>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
