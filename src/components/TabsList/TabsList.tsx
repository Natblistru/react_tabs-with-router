import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from '../Tabs';
import { Tab } from '../../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabsId } = useParams<{ tabsId?: string }>();
  const [selectedTabId, setSelectedTabId] = useState<string | null>(
    tabsId !== undefined ? tabsId : null,
  );

  const isValidTab = tabs.some(tab => tab.id === tabsId);

  useEffect(() => {
    if (isValidTab) {
      setSelectedTabId(tabsId || null);
    } else {
      setSelectedTabId(null);
    }
  }, [tabsId, isValidTab]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return <Tabs tab={tab} key={tab.id} selectedTab={selectedTabId} />;
          })}
        </ul>
      </div>

      {!selectedTabId && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}

      <div className="block" data-cy="TabContent">
        {tabs.map(tab => {
          return tab.id === selectedTabId && tab.content;
        })}
      </div>
    </div>
  );
};
