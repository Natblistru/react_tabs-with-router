import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabsContext } from '../services/services';

export const TabContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tabs = useContext(TabsContext);

  const content = tabs.find(tab => tab.id.toString() === id)?.content;

  return (
    <div className="container">
      {content ? (
        <div className="block" data-cy="TabContent">
          {content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
