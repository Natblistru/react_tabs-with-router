import React, { useContext, useEffect } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TabContext } from '../Context/TabContext';

const IncorrectUrlRedirectTime = 100;

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const { tabs } = useContext(TabContext);
  const navigate = useNavigate();

  const activeTab: Tab | undefined = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    if (!activeTab) {
      window.setTimeout(() => navigate('..'), IncorrectUrlRedirectTime);
    }
  }, [activeTab, navigate]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': activeTab?.id === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
