import { Link, useParams } from 'react-router-dom';
import '../App.scss';
import { Tab } from '../types/Tab';

export const TabsInBox = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={
                tab.id === tabId ? 'tabs__item is-active' : 'tabs__item'
              }
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <p className="block" data-cy="TabContent">
          Please select a tab
        </p>
      )}
    </>
  );
};
