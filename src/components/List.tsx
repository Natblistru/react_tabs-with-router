import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const List: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const visibleContent = selectedTab ? selectedTab.content : null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`../${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {visibleContent}
      </div>
    </div>
  );
};
