import { Link, useLocation } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  data: Tab;
};

export const TabContent:React.FC<Props> = ({ data }) => {
  const location = useLocation();
  const isActive = location.pathname.endsWith(data.id);
  
  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <Link to={data.id}>{data.title}</Link>
    </li>
  );
};
