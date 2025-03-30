import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
};

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams<{ tabId?: string }>();

  let extractTabId = null;

  if (tabId !== undefined) {
    extractTabId = tabId.match(/(\d+)/);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={tabId === `${tab.id}` ? 'is-active' : ''}
                data-cy="Tab"
              >
                <Link to={`${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {extractTabId !== null && +extractTabId[1] <= tabs.length ? (
          tabs.map(tab => (tabId === `${tab.id}` ? tab.content : ''))
        ) : (
          <p>Please select a tab</p>
        )}
      </div>
    </div>
  );
};
