import "./Layout.scss";
// import Sidebar from "../SideBar";
import Topbar from "../TopBar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {/* <Sidebar /> */}
      <div className="layout-content">
        <Topbar />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
