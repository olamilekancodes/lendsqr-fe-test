import activeUser from "../assets/icons/user/active-user.png";
import user from "../assets/icons/user/users.png";
import userLoan from "../assets/icons/user/users-loan.png";
import userSavings from "../assets/icons/user/user-savings.png";

const cardContents = [
  {
    title: "users",
    icon: user,
    number: "2,453",
  },
  {
    title: "active users",
    icon: activeUser,
    number: "1,023",
  },
  {
    title: "user with laons",
    icon: userLoan,
    number: "278",
  },
  {
    title: "user with savings",
    icon: userSavings,
    number: "1,892",
  },
];

export const getCardContent = function () {
  return cardContents;
};
