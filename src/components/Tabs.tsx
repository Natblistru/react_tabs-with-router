import cn from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
type Props = {
  tabs: Tab[];
  onTabSelected: (tabId: string) => void;
};
export const Tabs: React.FC<Props> = ({ tabs, onTabSelected }) => {
  const { tabId: activeTabId } = useParams<{ tabId: string }>();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn('', {
                'is-active': id === activeTabId,
              })}
              data-cy="Tab"
            >
              <Link
                to={`/tabs/${id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(id)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
