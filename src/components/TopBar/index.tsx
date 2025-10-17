import "./Topbar.scss";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { TiArrowSortedDown } from "react-icons/ti";
import { LiaBell } from "react-icons/lia";

import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";
import Avatar from "../../shared/Avatar";

interface TopbarProps {
  setOpenMobileNav: (open: boolean) => void;
}

const Topbar = ({ setOpenMobileNav }: TopbarProps) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <Menu
          size={20}
          className="menu-icon"
          onClick={() => setOpenMobileNav(true)}
        />
        <NavLink to="/dashboard">
          <img src={mobileLogo} alt="Lendsqr Logo" className="mobile-logo" />
          <img src={logo} alt="Lendsqr Logo" className="logo" />
        </NavLink>
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
        <LiaBell size={20} className=" bell-icon" />
        <div className="avatar-container">
          <Avatar name="Jane Smith" size={40} />
          <p>Jane</p>
          {/* <img src={downArrow} alt="arrow icon" /> */}
          <TiArrowSortedDown size={20} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
