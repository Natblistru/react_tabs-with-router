import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
}

export const TabLink: React.FC<Props> = ({ tab }) => (
  <Link to={`../${tab.id}`}>
    {tab.title}
  </Link>
);
