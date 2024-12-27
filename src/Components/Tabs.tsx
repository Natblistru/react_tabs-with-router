import { tabs } from '../data/Tabs';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
const Tabs = () => {
  const { tabId } = useParams();

  const activeTab: Tab | undefined = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  data-cy="Tab"
                  key={tab.id}
                  className={classNames({
                    'is-active': tab.id === activeTab?.id,
                  })}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {activeTab ? `${activeTab?.content}` : `Please select a tab`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
