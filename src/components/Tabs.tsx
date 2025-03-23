import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

export const Tabs = ({ tabs, tabId }) => {
  const navigate = useNavigate();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div>
        {' '}
        <ul>
          {' '}
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
              onClick={() => navigate(`/tabs/${tab.id}`)}
            >
              <Link data-cy="TabLink" to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
        {activeTab ? (
          <div data-cy="TabContent">{activeTab.content}</div>
        ) : (
          <p data-cy="TabContent">Please select a tab</p>
        )}
      </div>
    </div>
  );
};
