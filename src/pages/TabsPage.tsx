import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../utils/tabs';
import { Tab } from '../types/Tab';

export default function TabsPage() {
  const { userId } = useParams();

  const activeTab = tabs.find((tab: Tab) => tab.id === userId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': userId === id })}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab?.content : 'Please select a tab'}
      </div>
    </>
  );
}
