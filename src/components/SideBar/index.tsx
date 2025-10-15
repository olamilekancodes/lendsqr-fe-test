import { ChevronDown } from "lucide-react";

import "./SideBar.scss";
import briefcase from "../../assets/icons/nav/briefcase.png";
import home from "../../assets/icons/nav/home.png";
import loan from "../../assets/icons/nav/loan.png";

const navSections = [
  {
    title: "customers",
    links: [
      { name: "Users", icon: briefcase },
      { name: "Guarantors", icon: home },
      { name: "Loans", icon: loan },
      { name: "Decision Models", icon: briefcase },
      { name: "Savings", icon: home },
      { name: "Loan Requests", icon: loan },
      { name: "Whitelist", icon: briefcase },
      { name: "Karma", icon: home },
    ],
  },
  {
    title: "businesses",
    links: [
      { name: "Organization", icon: briefcase },
      { name: "Loan Products", icon: home },
      { name: "Savings Products", icon: loan },
      { name: "Fees and Charges", icon: briefcase },
      { name: "Transactions", icon: home },
      { name: "Services", icon: loan },
      { name: "Service Account", icon: briefcase },
      { name: "Settlements", icon: home },
      { name: "Reports", icon: home },
    ],
  },
  {
    title: "settings",
    links: [
      { name: "Preferences", icon: briefcase },
      { name: "Fees and Pricing", icon: home },
      { name: "Audit Logs", icon: loan },
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
        <p className="nav-link">
          <img src={briefcase} alt="switch organization icon" />
          Dashboard
        </p>

        {navSections.map((section, index) => (
          <div key={index} className="nav-section">
            <p className="section-title">{section.title.toUpperCase()}</p>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="nav-link">
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="link-icon"
                  />
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <span className="divider"></span>

      <button className="btn">
        <img src={briefcase} alt="switch organization icon" />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
