import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  selectedTabId?: string;
};

export const Tabs = ({ tabs, selectedTabId }: Props) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === selectedTabId ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
