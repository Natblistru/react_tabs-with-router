import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { TabContext } from '../context/TabContext';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  // const { selectedTabId, setSelectedTabId } = useContext(TabContext);
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';
  const filteredTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === selectedTabId,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {filteredTab ? filteredTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
