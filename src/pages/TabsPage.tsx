import { useContext } from "react";
import { TabsList } from "../components/TabsList";
import { TabsContext } from "../store/TabsContext";
import { useParams } from "react-router-dom";

export const TabsPage = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList />

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}

    </>
  );
}
