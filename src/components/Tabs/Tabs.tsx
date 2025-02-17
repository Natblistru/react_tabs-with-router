import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type TabProps = {
  tab: Tab;
  selectedTab: string | null;
};

export const Tabs: React.FC<TabProps> = ({ tab, selectedTab }) => {
  return (
    <li className={tab.id === selectedTab ? 'is-active' : ''} data-cy="Tab">
      <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
        {tab.title}
      </Link>
    </li>
  );
};
