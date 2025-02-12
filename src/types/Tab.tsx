import { useParams } from 'react-router-dom';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

export type TabContentProps = {
  allTabs: Tab[];
};

export const TabContent: React.FC<TabContentProps> = ({ allTabs }) => {
  const { tabsId } = useParams();
  const tab = allTabs.find(curTab => curTab.id === tabsId);

  return tab ? <p>{tab.content}</p> : <p>Tab not found</p>;
};
