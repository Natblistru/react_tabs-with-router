import { useContext } from 'react';
import { TabContext } from '../store/GlobalProvider';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const Tabs = () => {
  const tabs = useContext(TabContext);
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {currentTab ? (
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
