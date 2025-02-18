import { Link, useParams } from 'react-router-dom';
import tabsFromServe from '../api/tabsFromServe.json';

export const TabsList = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabId;
  const tabcontent = tabsFromServe.find(e => e.id === selectedTab)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabsFromServe.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === selectedTab ? 'is-active' : ''}
            >
              <Link to={`#/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabcontent || 'Please select a tab'}
      </div>
    </>
  );
};
