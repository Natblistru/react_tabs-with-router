import { Link, useParams } from 'react-router-dom';
import tabsFromServer from '../api/tabsFromServer.json';
import classNames from 'classnames';

export const TabList = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId;
  const tabContent = tabsFromServer.find(
    item => item.id === selectedTabId,
  )?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabsFromServer.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
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
