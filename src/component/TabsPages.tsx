import { TabItem } from './TabItem';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const TabsPages = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => String(tab.id) === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <TabItem
                  isActive={tab.id === tabId}
                  selectedTab={selectedTab}
                  key={tab.id}
                  title={tab.title}
                  id={tab.id}
                />
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? (
            <p>{selectedTab.content}</p>
          ) : (
            <p>Please select a tab</p>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
