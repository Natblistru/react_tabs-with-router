import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  const isSelectedTab = useMemo(() => tabs.find(
    tab => tab.id === tabId,
  )?.content, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': el.id === tabId })}
              key={el.id}
            >
              <Link to={el.id}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isSelectedTab || 'Please select a tab'}
      </div>
    </>
  );
};
