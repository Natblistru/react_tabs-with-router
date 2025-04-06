import { useContext, useEffect } from 'react';
import { TabsContext } from '../context/TabsProvider';
import { Tab } from '../types/Tab';
import { Link, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const Tabs = () => {
  const tabs: Tab[] = useContext(TabsContext);

  const { tabId } = useParams();
  const navigate = useNavigate();
  const activeTab = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    if (!activeTab) {
      navigate('/tabs');
    }
  }, [activeTab, navigate]);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
