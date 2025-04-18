import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabContex } from '../context/TabContext';

export const TabContent = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabContex);
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
