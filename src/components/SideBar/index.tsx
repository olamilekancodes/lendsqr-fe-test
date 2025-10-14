import { Home, Users, Settings } from "lucide-react";

import "./SideBar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Lendsqr</div>
      <nav>
        <ul>
          <li>
            <Home size={18} /> Dashboard
          </li>
          <li>
            <Users size={18} /> Users
          </li>
          <li>
            <Settings size={18} /> Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
