import React, { useEffect, useState } from 'react';
import { TabsItem } from '../../Components/TabsItem/TabsItem';
import { useNavigate, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();
  const [activeTabId, setActiveTabId] = useState<string | null>(tabId ?? null);

  useEffect(() => {
    if (tabId && tabs.some(tab => tab.id === tabId)) {
      setActiveTabId(tabId);
    } else if (tabId) {
      navigate('/tabs');
    } else {
      setActiveTabId(null);
    }
  }, [tabId, navigate]);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      {tabs.length > 0 ? (
        <TabsItem tabs={tabs} activeTabId={activeTabId ?? ''} />
      ) : (
        <p>No tabs available</p>
      )}
    </div>
  );
};
