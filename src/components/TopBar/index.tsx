import "./Topbar.scss";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import Avatar from "../../shared/Avatar";

const Topbar = () => {
  return (
    <header className="topbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Lendsqr Logo" className="logo" />
      </Link>

      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
        </div>
        <Search size={2} className="search-icon" />
      </div>

      <div className="topbar-right">
        <button className="docs-button">Docs</button>
        <Avatar name="Jane Smith" size={40} />
      </div>
    </header>
  );
};

export default Topbar;
