import React from 'react';
import { Tab } from '../../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const isValid = tabs.filter(tab => tab.id === tabId).length;

  return (
    <div className="block" data-cy="TabContent">
      {isValid
        ? tabs[tabs.findIndex(tab => tab.id === tabId)].title
        : 'Please select a tab'}
      {/* {tab ? tab.title : `Please select a tab`} */}
    </div>
  );
};
