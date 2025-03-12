import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const ActiveTab: React.FC<Props> = ({ tab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};
