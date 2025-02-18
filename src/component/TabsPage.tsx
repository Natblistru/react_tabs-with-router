import { Link, useParams } from 'react-router-dom';
import tabsFromServe from '../api/tabsFromServe.json';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const tabContent = tabsFromServe.find(e => e.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabsFromServe.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </>
  );
};
