import { PageTitle } from "../../shared/PageTitle";

import activeUser from "../../assets/icons/user/active-user.png";
import userSavings from "../../assets/icons/user/user-savings.png";
import userLoan from "../../assets/icons/user/users-loan.png";
import user from "../../assets/icons/user/users.png";
import "./Users.scss";

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

const Users = () => {
  return (
    <>
      <PageTitle title="Users" />

      <div className="info-card-grid">
        {cardContents.map((card, index) => (
          <div key={index} className="info-card">
            <img src={card.icon} alt={`${card.title} icon`} />
            <p className="info-card-title">{card.title}</p>
            <h2 className="info-card-number">{card.number}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
