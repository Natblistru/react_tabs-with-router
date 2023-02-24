import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};
export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({
              'is-active': tab.id === tabId,
            })}
          >
            <Link to={`/tabs/${tab.id}`}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
