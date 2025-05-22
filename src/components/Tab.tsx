import { Tab } from '../types/Tab';
type Props = {
  tab: Tab | null;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {tab ? tab.content : 'Please select a tab'}
    </div>
  );
};
