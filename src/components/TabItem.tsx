import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': tabId === tab.id })}>
      <Link to={`../${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
