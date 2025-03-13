import React from 'react';
import { Tab } from '../../types/Tab';

type TabContentProps = {
  tab: Tab;
};

export const TabContent: React.FC<TabContentProps> = ({ tab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};
