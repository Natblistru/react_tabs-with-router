import { useParams } from 'react-router-dom';
import { tabs } from '../Root';

export const TabContent: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const tab = tabs.find(t => t.id === tabId);

  if (!tab) {
    return (
      <div className="block" data-cy="TabContent">
        Tab not found
      </div>
    );
  }

  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};
