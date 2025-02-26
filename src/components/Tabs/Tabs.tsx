import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTabId = tabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
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
        {selectedTabId ? (
          <>
            {tabs.find(tab => tab.id === selectedTabId)
              ? tabs.find(tab => tab.id === selectedTabId)?.content
              : 'Please select a tab'}
          </>
        ) : (
          'Please select a tab'
        )}
      </div>
    </div>
  );
};
