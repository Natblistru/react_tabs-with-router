import { useParams } from 'react-router-dom';
import tabs from '../api/tabs.json';

const TabContent = () => {
  const { tabId } = useParams();
  const curTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      <p>{curTab?.content}</p>
    </div>
  );
};

export default TabContent;
