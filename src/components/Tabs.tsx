import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Tabs = ({ tabs, activeTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === activeTabId })}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}> {tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId
          ? tabs.find(tab => tab.id === activeTabId)?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
