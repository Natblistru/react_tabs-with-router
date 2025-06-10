import { FC, useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { tabs } from '../../tabs';
import TabsItem from '../../components/TabsItem';

const Tabs: FC = () => {
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

export default Tabs;
