import { Tab } from "../types/Tab";
import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tabs: Tab[],
  tabId: string | undefined,
}

export const Tabs = ({ tabs, tabId }: Props) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': tab.id === tabId })}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
