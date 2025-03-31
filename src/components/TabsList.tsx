import { Tab } from "../types/Tab";
import cn from 'classnames';
import { Link } from 'react-router-dom';



type Props = {
  tabs: Tab[];
  activeTabId: string;
}

export const TabsList: React.FC<Props> = ({ tabs, activeTabId }) => {


  const activeTab = tabs.find((tab) => tab.id === activeTabId);



  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}

              data-cy="Tab"
              className={cn({ "is-active": tab.id === activeTabId })}>
              <Link to={`/tabs/${tab.id}`}
                >{tab.title}
              </Link>
          </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
       {!activeTab ? 'Please select a tab' : activeTab.content}
      </div>
    </div>
  );
};


