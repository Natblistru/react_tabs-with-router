import { useParams } from 'react-router-dom';
type Props = {
  tabsIds: string[];
};

export const TabPage: React.FC<Props> = ({ tabsIds }) => {
  const { tabId } = useParams();

  return (
    <div className="block" data-cy="TabContent">
      {tabId && tabsIds.includes(tabId)
        ? `Some text ${tabId.slice(4)}`
        : `Please select a tab`}
    </div>
  );
};
