import { Outlet } from "react-router-dom";

import "./Layout.css";
function Layout() {
  return (
     <main className="admin-content">
          <Outlet />
        </main>
    
  );
}

export default Layout;