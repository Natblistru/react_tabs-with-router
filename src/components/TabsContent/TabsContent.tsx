import React from 'react';

type TabContentProps = {
  content?: string;
};

export const TabsContent: React.FC<TabContentProps> = ({ content }) => {
  return (
    <div className="block" data-cy="TabContent">
      {content || 'Please select a tab'}
    </div>
  );
};
