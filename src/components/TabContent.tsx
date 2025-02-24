import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../App';

export const TabContent = () => {
  const { tabId } = useParams();

  const findTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div className="block" data-cy="TabContent">
      {findTabContent ? <>{findTabContent}</> : 'Please select a tab'}
    </div>
  );
};
