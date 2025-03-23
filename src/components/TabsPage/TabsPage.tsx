import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import cn from 'classnames';

interface Props {
  tabs: Tab[];
}

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams<{ tabId?: string }>();

  const selectedTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
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

      <div className="block" data-cy="TabContent">
        {selectedTabContent || 'Please select a tab'}
      </div>
    </>
  );
};
