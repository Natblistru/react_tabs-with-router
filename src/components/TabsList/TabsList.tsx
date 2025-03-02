import React, { useContext } from 'react';
import { TabItem } from '../TabItem';
import { TabsContext } from '../../store/TabsContext';

export const TabsList: React.FC = React.memo(() => {
  const { tabs } = useContext(TabsContext);

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem tab={tab} key={tab.id} />
        ))}
      </ul>
    </div>
  );
});

TabsList.displayName = 'TabsList';
