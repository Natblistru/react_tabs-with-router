import React, { useContext } from 'react';
import { TabsComponent } from '../../components/tsbs/tabs.component';
import { DataContext } from '../../store/DataContext';
import { useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(DataContext);
  const { tabId } = useParams();

  const findOne = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsComponent />
      <div className="block" data-cy="TabContent">
        {findOne ? findOne.content : 'Please select a tab'}
      </div>
    </>
  );
};
