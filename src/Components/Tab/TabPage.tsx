import React from 'react';
import { Tab } from '../../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabPage: React.FC<Props> = ({ tabs }) => {
  const param = useParams();
  const tabFromUrl = tabs.find(tab => tab.id === param.tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tabFromUrl ? tabFromUrl.content : 'Please select a tab'}
    </div>
  );
};
