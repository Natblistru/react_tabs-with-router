import {  Outlet } from "react-router-dom";
import { Tab } from "../../types/Tab";
import { TabContent } from "../TabContent/TabContent";


export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => <TabContent  key={tab.id} data={tab}/>)}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          <Outlet />
        </div>
      </div>
    </>
  );
}