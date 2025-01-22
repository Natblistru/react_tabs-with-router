import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
            key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === selectedTab?.id,
              })}
            >
              {tab.id === selectedTab?.id ? (
                <Link to="..">{tab.title}</Link>
              ) : (
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
