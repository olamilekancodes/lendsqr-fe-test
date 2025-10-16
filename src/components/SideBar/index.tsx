import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./SideBar.scss";
import briefcase from "../../assets/icons/nav/briefcase.png";
import home from "../../assets/icons/nav/home.png";
import sack from "../../assets/icons/nav/customers/sack.png";
import handshake from "../../assets/icons/nav/customers/handshake.png";
import piggyBank from "../../assets/icons/nav/customers/piggy-bank.png";
import loan from "../../assets/icons/nav/customers/loan.png";
import userCheck from "../../assets/icons/nav/customers/user-check.png";
import userTimes from "../../assets/icons/nav/customers/user-times.png";
import guarantors from "../../assets/icons/nav/customers/guarantors.png";
import users from "../../assets/icons/nav/customers/users.png";
import coins from "../../assets/icons/nav/businesses/coins.png";
import transaction from "../../assets/icons/nav/businesses/transactions.png";
import galaxy from "../../assets/icons/nav/businesses/galaxy.png";
import userConfig from "../../assets/icons/nav/businesses/user-config.png";
import scroll from "../../assets/icons/nav/businesses/scroll.png";
import chart from "../../assets/icons/nav/businesses/chart-bar.png";
import savings from "../../assets/icons/nav/businesses/savings.png";
import sliders from "../../assets/icons/nav/settings/sliders.png";
import badge from "../../assets/icons/nav/settings/badge.png";
import clipboard from "../../assets/icons/nav/settings/clipboard.png";
import tire from "../../assets/icons/nav/settings/tire.png";
import signOut from "../../assets/icons/nav/sign-out.png";
import logo from "../../assets/images/logo.png";

interface SideBarProps {
  closeNavAction?: () => void;
}

const navSections = [
  {
    title: "customers",
    links: [
      { name: "Users", icon: users, url: "/users" },
      { name: "Guarantors", icon: guarantors, url: "/guarantors" },
      { name: "Loans", icon: sack, url: "/loans" },
      { name: "Decision Models", icon: handshake, url: "/decision-models" },
      { name: "Savings", icon: piggyBank, url: "/savings" },
      { name: "Loan Requests", icon: loan, url: "/loan-requests" },
      { name: "Whitelist", icon: userCheck, url: "/whitelist" },
      { name: "Karma", icon: userTimes, url: "/karma" },
    ],
  },
  {
    title: "businesses",
    links: [
      { name: "Organization", icon: briefcase, url: "/organization" },
      { name: "Loan Products", icon: loan, url: "/loan-products" },
      { name: "Savings Products", icon: savings, url: "/savings-products" },
      { name: "Fees and Charges", icon: coins, url: "/fees-and-charges" },
      { name: "Transactions", icon: transaction, url: "/transactions" },
      { name: "Services", icon: galaxy, url: "/services" },
      { name: "Service Account", icon: userConfig, url: "/service-account" },
      { name: "Settlements", icon: scroll, url: "/settlements" },
      { name: "Reports", icon: chart, url: "/reports" },
    ],
  },
  {
    title: "settings",
    links: [
      { name: "Preferences", icon: sliders, url: "/preferences" },
      { name: "Fees and Pricing", icon: badge, url: "/fees-and-pricing" },
      { name: "Audit Logs", icon: clipboard, url: "/audit-logs" },
      { name: "Systems Messages", icon: tire, url: "/system-messages" },
    ],
  },
];

const Sidebar = ({ closeNavAction }: SideBarProps) => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Lendsqr Logo" className="logo" />
        </NavLink>
      </div>
      <div className="sidebar-content">
        <button className="btn">
          <img src={briefcase} alt="switch organization icon" />
          Switch Organization
          <ChevronDown size={15} />
        </button>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "dashboard-link" + (isActive ? " active" : "")
            }
            onClick={closeNavAction}
          >
            <img src={home} alt="dashboard icon" />
            Dashboard
          </NavLink>

          {navSections.map((section, index) => (
            <div key={index} className="nav-section">
              <p className="section-title">{section.title.toUpperCase()}</p>
              {section.links.map((link, idx) => (
                <NavLink
                  to={link.url}
                  key={idx}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  onClick={closeNavAction}
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="link-icon"
                  />
                  {link.name}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <hr className="divider" />

        <button className="btn">
          <img src={signOut} alt="logo out icon" onClick={closeNavAction} />
          Logout
        </button>

        <span className="version">v1.2.0</span>
      </div>
    </aside>
  );
};

export default Sidebar;
