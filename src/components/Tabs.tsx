// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  // tabs: Tab[];

};

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC<Props> = () => {
  const { tabsId } = useParams(); // Получаем id вкладки из URL
  const selectedTabId = tabsId || ''; // Строка. Например, 'tab-1'

  return (

    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTabId })} // Подсвечиваем активную вкладку
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId
          ? tabs.find(tab => tab.id === selectedTabId)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
