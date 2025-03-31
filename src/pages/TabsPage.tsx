import { TabsList } from "../components/TabsList";
import { useNavigate, useParams } from "react-router-dom";


const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  return (
    <TabsList tabs={tabs} activeTabId={tabId || ''} onTabSelected={(id) => navigate(`/tabs/${id}`)} />
  );
};
