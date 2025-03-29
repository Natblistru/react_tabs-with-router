import classNames from 'classnames';
import tabs from '../api/tabs';
import TabContent from './TabContent';
import { Link, useParams } from 'react-router-dom';
import Title from './Title';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const isTabExist = tabs.some(tab => tab.id === tabId) || !tabId;

  const titleText = isTabExist ? 'Tabs page' : 'Page not found';

  return (
    <>
      <Title text={titleText} />

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            const isActive = tabId === id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': isActive })}
              >
                <Link to={`/tabs/${id}`}>{title} </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <TabContent tabId={tabId || ''} />
    </>
  );
};

export default TabsPage;
