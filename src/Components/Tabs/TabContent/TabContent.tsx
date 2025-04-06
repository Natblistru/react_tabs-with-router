import { Link } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

type Props = {
  tabs: Tab[];
  tabId?: string;
};

export const TabContent = ({ tabs, tabId }: Props) => {
  return (
    <>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            className={tabId === tab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <Link to={tab.id} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};
