import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabContext } from '../../GlobalProvider/GlobalProvider';
import classNames from 'classnames';

export const Tab = () => {
  const tabs = useContext(TabContext);
  const { tabId } = useParams();

  const currentTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {!currentTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      )}
    </>
  );
};
