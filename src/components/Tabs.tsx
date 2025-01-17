import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();
  const info = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <>
                {tabId ? (
                  <li
                    data-cy="Tab"
                    className={classNames(tabId === tab.id ? 'is-active' : '')}
                  >
                    <NavLink to={`../${tab.id}`}>{tab.title}</NavLink>
                  </li>
                ) : (
                  <li
                    data-cy="Tab"
                    className={classNames(tabId === tab.id ? 'is-active' : '')}
                  >
                    <NavLink to={`${tab.id}`}>{tab.title}</NavLink>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {info ? info.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
