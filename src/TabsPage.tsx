import { useParams, Link } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';

const TabsPage = () => {
  const { id } = useParams();
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const [selectedTab, setSelectedTab] = useState(id || '');

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              data-cy="Tab"
              className={selectedTab === tab.id ? 'is-active' : ''}
            >
              <Link
                to={`/tabs/${tab.id}`}
                className={selectedTab === tab.id ? 'is-active' : ''}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab === ''
          ? 'Please select a tab'
          : tabs.some(tab => tab.id === selectedTab)
            ? tabs.find(tab => tab.id === selectedTab)?.content
            : 'Please select a tab'}
      </div>
    </div>
  );
};

export default TabsPage;
