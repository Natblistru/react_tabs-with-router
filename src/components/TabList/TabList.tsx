import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import classNames from 'classnames';

export const TabList = () => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': activeTab?.id === tab.id,
                })}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? `${activeTab.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
