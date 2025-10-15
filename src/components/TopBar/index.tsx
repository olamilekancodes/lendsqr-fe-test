import "./Topbar.scss";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Bell, ChevronDown, Menu } from "lucide-react";

import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";
import Avatar from "../../shared/Avatar";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <Menu size={20} className="menu-icon" />
        <Link to="/">
          <img src={mobileLogo} alt="Lendsqr Logo" className="mobile-logo" />
          <img src={logo} alt="Lendsqr Logo" className="logo" />
        </Link>
      </div>

      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
        </div>
        <button className="search-button">
          <Search size={15} className="search-icon" />
        </button>
      </div>

      <div className="topbar-right">
        <button className="docs-button">Docs</button>
        <Bell size={15} className=" bell-icon" />
        <div className="avatar-container">
          <Avatar name="Jane Smith" size={40} />
          <p>Jane</p>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
