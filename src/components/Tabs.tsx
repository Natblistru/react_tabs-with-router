import React from 'react';
import { useState } from 'react';
import { Tab } from '../types/Tab';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
  path: string;
};

export const Tabs: React.FC<Props> = ({ tabs, path }) => {
  const { tabsId } = useParams();
  const selectedUserId = tabsId ? +tabsId : 0;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
               +tab.id === selectedUserId ? (
                <li data-cy="Tab" key={tab.id}>
                  <Link to={`/tabs`}>{tab.title}</Link>
                </li>
              ) : (
                < li
                  data-cy="Tab"
                  // className='is-active'
                  className={cn({ 'is-active': tab.id === tabsId})}
                  key={tab.id}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              )
            )
          )}
        </ul>
      </div>

      {
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      }
    </>
  );
};
