import classNames from 'classnames';
import { NavLink, useLocation, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const tabIdNorm =
    tabId && tabs.map(tab => tab.id).includes(tabId) ? tabId : null;
  const location = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const path = `/tabs/${tab.id}`;
            const isActive = location.pathname === path;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({ 'is-active': isActive })}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!tabIdNorm
          ? 'Please select a tab'
          : tabs.find(t => t.id === tabId)?.content}
      </div>
    </>
  );
};
