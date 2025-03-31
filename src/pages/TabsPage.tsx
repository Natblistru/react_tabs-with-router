import React from "react";
import { Tabs } from "../components/Tabs";

export const TabsPage = () => {
  return (
    <div className="section">
    <div className="container">

      <h1 className="title">Tabs page</h1>


      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className="is-active">
            <a href="#/">Tab 1</a>
          </li>
          <li data-cy="Tab">
            <a href="#/">Tab 2</a>
          </li>
          <li data-cy="Tab">
            <a href="#/">Tab 3</a>
          </li>
        </ul>
      </div>

<Tabs />
    </div>
  </div>
  )};
