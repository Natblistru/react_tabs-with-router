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
  const activeTab = tabs.find(tab => tab.id === tabId);
  // move routing between tabs inside this component

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={tabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <Link to={tab.id} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : <p>Please select a tab</p>}
      </div>
    </div>
  );
};
