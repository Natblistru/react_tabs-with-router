import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import classNames from 'classNames';

export const TabsPages = () => {
  const [activeTab, setActiveTab] = useState('');

  const isActiveTab = (curentTab: string) =>
    classNames('', { 'is-active': activeTab === curentTab });

  const click = (curentTab: string) => {
    setActiveTab(curentTab);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={isActiveTab('tab-1')}>
            <NavLink to="tab-1" onClick={() => click('tab-1')}>
              Tab 1
            </NavLink>
          </li>
          <li data-cy="Tab" className={isActiveTab('tab-2')}>
            <NavLink to="tab-2" onClick={() => click('tab-2')}>
              Tab 2
            </NavLink>
          </li>
          <li data-cy="Tab" className={isActiveTab('tab-3')}>
            <NavLink to="tab-3" onClick={() => click('tab-3')}>
              Tab 3
            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route
          path=":tab-1"
          element={
            <div className="block" data-cy="TabContent">
              Some text 1
            </div>
          }
        />
        <Route
          path="tab-2"
          element={
            <div className="block" data-cy="TabContent">
              Some text 2
            </div>
          }
        />
        <Route
          path="tab-3"
          element={
            <div className="block" data-cy="TabContent">
              Some text 3
            </div>
          }
        />
        <Route
          index
          element={
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          }
        />
      </Routes>
    </>
  );
};
