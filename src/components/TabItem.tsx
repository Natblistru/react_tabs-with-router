import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

export const TabItem = ({ tab }: { tab: Tab }) => {
  const { tabId } = useParams();

  return (
    <>
      <li
        data-cy="Tab"
        className={classNames({ 'is-active': tabId === tab.id })}
      >
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
