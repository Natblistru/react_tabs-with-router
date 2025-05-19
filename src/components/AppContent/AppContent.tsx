import { Outlet } from "react-router-dom";

export const AppContent = () => {
  return (
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
