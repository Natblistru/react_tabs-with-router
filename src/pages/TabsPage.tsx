import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabs } = useContext(AppContext);
  const { tabId } = useParams();

  const findById = (tabIdFromRoute: string | undefined) => {
    return tabs.find(tab => tab.id === tabIdFromRoute);
  };

  const currTabRoute = findById(tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': currTabRoute?.id === tab.id })}
                key={tab.id}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currTabRoute?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
