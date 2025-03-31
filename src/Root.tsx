
import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { TabsPage } from "./pages/TabsPage";

export const Root = () => (

  <Routes>
    <Route path={'/'} element={<App />}>
      <Route index element={<HomePage />} />
      <Route path={'/tabs'} element={<TabsPage />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  </Routes>

)
