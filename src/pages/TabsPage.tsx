import { useContext } from 'react';
import { TabsList } from '../components/TabsList/TabsList';
import { TabsContext } from '../store/TabsContext';
import { useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();
  const validActiveTabId = tabId ? tabId.toString() : '';
  const contentTab = tabs.find(tab => tab.id === validActiveTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <TabsList />

        {validActiveTabId === contentTab?.id ? (
          <div className="block" data-cy="TabContent">
            {contentTab?.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </>
  );
};
