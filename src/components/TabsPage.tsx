import cn from 'classnames';
import { tabs } from '../tabs';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

function preperedSelectedTab(allTabs: Tab[], activeTabId: null | string) {
  const selectedTab = allTabs.find(tab => tab.id === activeTabId) ?? null;

  return selectedTab;
}

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabId = tabId ? tabId : null;

  const selectedTab = preperedSelectedTab(tabs, activeTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': activeTabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content ?? 'Please select a tab'}
      </div>
    </>
  );
};
