import { Outlet } from "react-router-dom";
import { useState } from "react";

import "./Layout.scss";
import Sidebar from "../SideBar";
import Topbar from "../TopBar";

const Layout = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <div className="layout">
      <Topbar setOpenMobileNav={setOpenMobileNav} />
      <div className="layout-body">
        <div className="desktop-nav">
          <Sidebar />
        </div>

        <main className="page-content">
          <Outlet />
        </main>
      </div>

      <div
        className={`mobile-underlay ${openMobileNav ? "open" : ""}`}
        onClick={() => setOpenMobileNav(false)}
      />

      <div className={`mobile-nav ${openMobileNav ? "open" : ""}`}>
        <Sidebar closeNavAction={() => setOpenMobileNav(false)} />
      </div>
    </div>
  );
};

export default Layout;
