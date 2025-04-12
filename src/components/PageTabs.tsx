import classNames from 'classnames';
import { TabContext } from '../context/TabContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

export const PageTabs = () => {
  const { tabs } = useContext(TabContext);
  const { tabId } = useParams();
  const selectedTab: Tab | undefined = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

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

      <div className="block" data-cy="TabContent">
        {tabId && selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
