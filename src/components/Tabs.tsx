import React from 'react';
import { useLocation, useMatch, useParams } from 'react-router-dom';

type Props = {
  content?: string;
};

export const Tabs: React.FC<Props> = ({ content }) => {
  const { tabId } = useParams();

console.log(tabId);


  return (
    <div className="block" data-cy="TabContent">
      {content}
    </div>
  );
};
