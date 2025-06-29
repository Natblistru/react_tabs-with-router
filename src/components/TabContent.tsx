import { useParams } from 'react-router-dom';

type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
};

export const TabContent = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const tab = tabs.find(t => t.id === tabId);

  if (!tab) {
    return <p>Please select a tab</p>;
  }

  return (
    <div className="section">
      <div className="container">
        <p>{tab.content}</p>
      </div>
    </div>
  );
};
