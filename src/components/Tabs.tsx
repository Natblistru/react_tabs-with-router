import { Link, useNavigate, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';
import { useEffect } from 'react';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const navigate = useNavigate();
  const activeTab = tabs.find(tab => tab.id === tabId) as Tab;

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
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
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
