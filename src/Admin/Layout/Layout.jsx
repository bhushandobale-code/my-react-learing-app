import { Outlet } from "react-router-dom";

import "./Layout.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function Layout() {
  return (
     <main className="admin-content">
          <Header />
          <Sidebar />
          <Outlet />
        </main>
    
  );
}

export default Layout;