import React from 'react';
import tabs from '../api/tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabId: string;
};

const TabContent: React.FC<Props> = ({ tabId }) => {
  const isTabExist = tabId && tabs.some(tab => tab.id === tabId);

  const tabContent = isTabExist
    ? (tabs.find(tab => tab.id === tabId) as Tab).content
    : 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {tabContent}
    </div>
  );
};

export default TabContent;
