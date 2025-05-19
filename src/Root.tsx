import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import React from "react";

import { App } from "./App";
import { Tabs } from './components/tabs';
import { HomePage } from './components/home';



export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path="home" element={<Navigate to='/' replace/>} />
          <Route path="tabs/:tabId?" element={<Tabs/>} />
        </Route>

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  )
};
