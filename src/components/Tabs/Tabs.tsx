import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export interface Tab {
  id:string,
  title:string,
  content:string,
}

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <div className="section">
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  key={tab.id}
                  className={tab.id === selectedTab?.id ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <Link
                    to={`/tabs/${tab.id}`}
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div
          className="block"
          data-cy="TabContent"
        >
          {
            selectedTab !== null
              ? selectedTab?.content
              : 'Please select a tab'
          }
        </div>
      </div>
    </div>
  );
};
