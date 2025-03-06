import { useContext } from 'react';
import { TabsContext } from '../store/TabsContext';
import { TabItem } from './TabItem';

export const TabsList: React.FC = () => {
  const { tabs } = useContext(TabsContext);

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  );
};
