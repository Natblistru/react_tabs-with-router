import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../App';
import { TabContent } from '../components/TabContent';

export const TabsPage = () => {
  const { tabId } = useParams();
  const [selectedTab, setSelectedTab] = useState<string | null>(tabId || null);

  // const navigate = useNavigate();

  useEffect(() => {
    if (tabId && tabId !== selectedTab) {
      setSelectedTab(tabId);
    }
  }, [tabId, selectedTab]);

  // const handleTabChange = (newTabId: string) => {
  //   navigate(`/tabs/${newTabId}`, { replace: true });
  //   setSelectedTab(newTabId);
  // };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={tab.id === selectedTab ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <TabContent />
      </div>
    </div>
  );
};
