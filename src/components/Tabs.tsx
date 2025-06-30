import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Porps = {
  tabs: Tab[];
  activeTab: Tab | undefined;
};

export const Tabs = ({ tabs, activeTab }: Porps) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={activeTab?.id === tab.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {!activeTab
          ? 'Please select a tab'
          : tabs.find(tab => tab.id === activeTab.id)?.content}
      </div>
    </>
  );
};
