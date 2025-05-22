import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabItem } from './Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              {tabId === tab.id ? (
                <Link to="..">{tab.title}</Link>
              ) : (
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <TabItem tab={tabs.find(tab => tab.id === tabId) || null} />
    </>
  );
};
