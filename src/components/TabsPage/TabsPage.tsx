import { tabs } from '../../api/tabs';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                selectedTab?.id === tab.id ? 'is-active' : '',
              )}
              key={tab.id}
            >
              {tabId === tab.id ? (
                <Link to={`..`}>{tab.title}</Link>
              ) : (
                <Link to={`../${tab.id}`} replace>
                  {tab.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab?.content : 'Please select a tab'}
      </div>
    </>
  );
};
