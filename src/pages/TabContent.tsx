import { useParams } from 'react-router-dom';
import tabs from '../api/tabs.json';

export const TabContent = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab?.content}
    </div>
  );
};
