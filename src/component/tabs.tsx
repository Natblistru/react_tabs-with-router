import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { tabs } from '../utils/tabs';
import cn from 'classnames';

export const TabsPage: React.FC = () => {
  const { userId } = useParams();
  const activeTabs = tabs.find((tab: Tab) => tab.id === userId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': userId === tab.id })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabs ? activeTabs.content : 'Please select a tab'}
      </div>
    </>
  );
};
