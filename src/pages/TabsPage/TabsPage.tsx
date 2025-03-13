import cn from 'classnames';
import { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../../context/TabsContext';
import { TabContent } from '../../components/TabContent/TabContent';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);

  const searchActiveTab = () => tabs.find(tab => tabId === tab.id);
  const activeTab = useMemo(searchActiveTab, [tabId, tabs]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link to={'../' + tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <TabContent tab={activeTab} />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
