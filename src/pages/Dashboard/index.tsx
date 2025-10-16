import activeUser from "../../assets/icons/user/active-user.png";
import userSavings from "../../assets/icons/user/user-savings.png";
import userLoan from "../../assets/icons/user/users-loan.png";
import user from "../../assets/icons/user/users.png";
import "./Dashboard.scss";

const cardContents = [
  {
    title: "users",
    icon: user,
    number: "2,453",
  },
  {
    title: "active users",
    icon: activeUser,
    number: "2,453",
  },
  {
    title: "user with laons",
    icon: userLoan,
    number: "2,453",
  },
  {
    title: "user with savings",
    icon: userSavings,
    number: "2,453",
  },
];

const Dashboard = () => {
  return (
    <div className="grid-card">
      {cardContents.map((card, index) => (
        <div key={index} className="card">
          <img src={card.icon} alt={`${card.title} icon`} />
          <p className="card-title">{card.title}</p>
          <h2 className="card-number">{card.number}</h2>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
