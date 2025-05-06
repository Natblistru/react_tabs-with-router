import React, { useContext } from 'react';
import { DataContext } from '../../store/DataContext';
import { TabComponent } from '../tab/tabComponent';

export const TabsComponent: React.FC = () => {
  const { tabs } = useContext(DataContext);

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabComponent key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  );
};
