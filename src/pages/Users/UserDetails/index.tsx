import { useParams } from "react-router-dom";

import { getUsers } from "../../../api/users";
import { EnhancedPageTitle } from "../../../shared/PageTitle";
import "./UserDetails.scss";
import StyledButton from "../../../shared/Button";
import Avatar from "./../../../shared/Avatar/index";
import { Rating } from "../../../shared/Rating";
import { formatAmount } from "../../../shared/utils/amountformatter";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();

  const users = getUsers();
  const user = users.find((u) => u.id === Number(id));

  const {
    username,
    email,
    phone_number,
    organization,
    first_name,
    last_name,
    date_joined,
    gender,
    BVN,
    facebook,
    instagram,
    twitter,
    guarantor_name,
    guarantor_phone_number,
    guarantor_email,
    status,
    amount,
    acount,
    bank,
    star,
    tag,
  } = user || {};

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details-container">
      <EnhancedPageTitle title="User Details" backlinkTitle="users">
        <div className="user-button">
          <StyledButton title="blacklist user" color="#de325d" />
          <StyledButton title="activate user" color="#39cdcc" />
        </div>
      </EnhancedPageTitle>

      <div className="basic-info-container">
        <div className="user-basic-info">
          <div className="avatar-details">
            <Avatar name={first_name || ""} size={100} />
            <div className="avatar-name">
              <h2 className="name">{username}</h2>
              <p className="tag">{tag}</p>
            </div>
          </div>

          <hr className="hori" />
          <div className="divider" />

          <div className="teir-container">
            <p className="teir">User's Tier</p>

            <Rating tag={Number(star) || 0} />
          </div>

          <div className="divider" />
          <hr className="hori" />

          <div className="amount-container">
            <p className="amount">{formatAmount(amount || 0)}</p>
            <p className="bank-details">
              {acount}/{bank}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
