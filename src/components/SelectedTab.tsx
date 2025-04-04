import { useContext } from "react";
import { TabsContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";

export const SelectedTab = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tabId && selectedTab
        ? selectedTab.content
        : "Please select a tab"}
    </div>
  )
}
