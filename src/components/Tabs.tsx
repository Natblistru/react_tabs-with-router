import React from 'react';
import { useState } from 'react';
import { Tab } from '../types/Tab';
import { Routes, Route, Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {

            return (
              <li data-cy="Tab" className="is-active" key={tab.id}>
                <Link to={`#/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
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
