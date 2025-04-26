import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const active = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title" data-cy="TabsPage">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              key={t.id}
              data-cy="Tab"
              className={t.id === tabId ? 'is-active' : ''} // активна вкладка
            >
              <Link to={`/tabs/${t.id}`}>{t.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {active ? active.content : 'Please select a tab'}
      </div>
    </>
  );
};
