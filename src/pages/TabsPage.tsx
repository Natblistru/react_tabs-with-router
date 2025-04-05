import { Tabs } from '../components/Tabs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const content =
    tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab';
  const isValidTabId = tabs.some(tab => tab.id === tabId);
  const navigate = useNavigate();

  if (!isValidTabId) {
    navigate('/tabs', { replace: true });
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === tab.id })}
              >
                <Link to={`/tabs/${tab.id}`} replace>
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Tabs content={content} />
      </div>
    </div>
  );
};
