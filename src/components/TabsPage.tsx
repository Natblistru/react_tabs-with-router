import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                key={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {
        !selectedTab && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )
      }
      {
        selectedTab && (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        )
      }
    </>
  );
};
