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

const navSections = [
  {
    title: "customers",
    links: [
      { name: "Users", icon: users },
      { name: "Guarantors", icon: guarantors },
      { name: "Loans", icon: sack },
      { name: "Decision Models", icon: handshake },
      { name: "Savings", icon: piggyBank },
      { name: "Loan Requests", icon: loan },
      { name: "Whitelist", icon: userCheck },
      { name: "Karma", icon: userTimes },
    ],
  },
  {
    title: "businesses",
    links: [
      { name: "Organization", icon: briefcase },
      { name: "Loan Products", icon: loan },
      { name: "Savings Products", icon: savings },
      { name: "Fees and Charges", icon: coins },
      { name: "Transactions", icon: transaction },
      { name: "Services", icon: galaxy },
      { name: "Service Account", icon: userConfig },
      { name: "Settlements", icon: scroll },
      { name: "Reports", icon: chart },
    ],
  },
  {
    title: "settings",
    links: [
      { name: "Preferences", icon: sliders },
      { name: "Fees and Pricing", icon: badge },
      { name: "Audit Logs", icon: clipboard },
      { name: "Systems Messages", icon: tire },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <button className="btn">
        <img src={briefcase} alt="switch organization icon" />
        Switch Organization
        <ChevronDown size={15} />
      </button>
      <nav>
        <NavLink to="/" className="dashboard-link">
          <img src={home} alt="dashboard icon" />
          Dashboard
        </NavLink>

        {navSections.map((section, index) => (
          <div key={index} className="nav-section">
            <p className="section-title">{section.title.toUpperCase()}</p>
            {section.links.map((link, idx) => (
              <NavLink to="/" key={idx} className="nav-link">
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
        <img src={signOut} alt="logo out icon" />
        Logout
      </button>

      <span className="version">v1.2.0</span>
    </aside>
  );
};

export default Sidebar;
