import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../../consts';
import { Tab } from '../../types/Tab';

export const Tabs = ({}) => {
  const { tabId } = useParams();
  const selectedTabId =
    tabId && tabs.some(tab => tab.id === tabId) ? tabId : null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {}}
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
