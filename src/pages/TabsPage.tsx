import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

import cn from 'classnames';

function prepareSelectedTab(allTabs, activeTabId) {
  return allTabs.find(tab => tab.id === activeTabId) ?? allTabs[0];
}

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = prepareSelectedTab(tabs, activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              onClick={() => tab.id !== selectedTab.id && onTabSelected(tab.id)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
