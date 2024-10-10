import { useParams } from "react-router-dom";

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];


export const Tab = () => {
  const { tabId } = useParams();
  const CurrentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {CurrentTab?.content}
  </div>
  )
};
