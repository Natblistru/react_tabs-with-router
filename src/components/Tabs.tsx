import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs &&
            tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': activeTab?.id === tab.id,
                })}
                data-cy="Tab"
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
