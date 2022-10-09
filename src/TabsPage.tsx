import classNames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">{tab.title}</Link>
            </li>
          ))}
        </ul>

      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
