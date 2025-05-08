import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface PropsTabs {
  tabs: Tab[];
  activeTabId: string | undefined;
}

export const Tabs = ({ tabs, activeTabId }: PropsTabs) => {
  const selectedTabId =
    activeTabId && tabs.some(tab => tab.id === activeTabId)
      ? activeTabId
      : null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <NavLink to={`../${tab.id}`} data-cy="TabLink">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId
          ? tabs.find((tab: Tab) => tab.id === selectedTabId)?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
