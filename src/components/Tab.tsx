import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab | null;
};

export const TabCell: React.FC<Props> = ({ tab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {!tab ? 'Please select a tab' : tab.content}
    </div>
  );
};
