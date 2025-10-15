import "./SideBar.scss";
import briefcase from "../../assets/icons/nav/briefcase.png";
import home from "../../assets/icons/nav/home.png";
import loan from "../../assets/icons/nav/loan.png";

const customerNavItems = [
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
];

const businessNavItems = [
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
];

const settingsNavItems = [
  {
    title: "settings",
    links: [
      { name: "Prefrences", icon: briefcase },
      { name: "Fees and Pricing", icon: home },
      { name: "Audit Logs", icon: loan },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <div>
          {customerNavItems.map((item, index) => (
            <div key={index} className="nav-section">
              <p className="section-title">{item.title.toUpperCase()}</p>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index} className="nav-link active">
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
        </div>

        <div>
          {businessNavItems.map((item, index) => (
            <div key={index} className="nav-section">
              <p className="section-title">{item.title.toUpperCase()}</p>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index} className="nav-link active">
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
        </div>

        <div>
          {settingsNavItems.map((item, index) => (
            <div key={index} className="nav-section">
              <p className="section-title">{item.title.toUpperCase()}</p>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index} className="nav-link active">
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
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
