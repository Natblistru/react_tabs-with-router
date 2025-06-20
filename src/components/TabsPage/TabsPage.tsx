import { Link, useParams, Outlet } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import cn from 'classnames';

type TabsPageProps = {
  tabs: Tab[];
};

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(tab.id === tabId ? 'is-active' : '')}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet context={{ tabs }} />
    </div>
  );
};
