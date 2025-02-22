import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

const TabList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={tabId === tab.id ? 'is-active' : ''}
        >
          <Link to={`../${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
