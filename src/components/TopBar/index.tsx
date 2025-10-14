import "./Topbar.scss";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";

import logo from "../../assets/images/logo.png";
import Avatar from "../../shared/Avatar";

const Topbar = () => {
  return (
    <header className="topbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Lendsqr Logo" className="logo" />
      </Link>

      <div className="search-container">
        <input type="text" placeholder="Search for anything" />
        <button className="search-button">
          <Search size={14} />
        </button>
      </div>

      <div className="topbar-right">
        <button className="docs-button">Docs</button>
        <Bell size={20} className="bell-icon" />

        <div className="user">
          <Avatar name="Jane Smith" size={40} />
          <p className="username">Jane</p>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
