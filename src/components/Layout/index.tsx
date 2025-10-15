import "./Layout.scss";
import Sidebar from "../SideBar";
import Topbar from "../TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Topbar />
      <div className="layout-body">
        <Sidebar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
