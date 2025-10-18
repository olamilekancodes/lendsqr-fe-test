import { useParams } from "react-router-dom";
import { useState } from "react";

import { getUsers } from "../../../api/users";
import { EnhancedPageTitle } from "../../../shared/PageTitle";
import "./UserDetails.scss";
import StyledButton from "../../../shared/Button";
import Avatar from "./../../../shared/Avatar/index";
import { Rating } from "../../../shared/Rating";
import { formatAmount } from "../../../shared/utils/amountformatter";
import ActionMenu from "../../../shared/ActionMenu";
import Tabs from "../../../shared/Tabs";
import GeneralDetails from "./components/GeneralInformation";
import NoContent from "../../../shared/NoContent";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("general");

  const users = getUsers();
  const user = users.find((u) => u.id === Number(id));

  return (
    <div className="user-details-container">
      <EnhancedPageTitle title="User Details" backlinkTitle="Users">
        <div className="user-button">
          <StyledButton title="blacklist user" color="#de325d" />
          <StyledButton title="activate user" color="#39cdcc" />
        </div>

        <div className="user-button-dropdown">
          <ActionMenu
            toggleAction={() => {}}
            items={[
              { label: <span>Blacklist User</span> },
              { label: <span>Activate User</span> },
            ]}
          />
        </div>
      </EnhancedPageTitle>

      <div className="basic-info-container">
        <div className="user-basic-info">
          {!user ? (
            <p className="text">User not found</p>
          ) : (
            <>
              <div className="avatar-details">
                <Avatar name={user.first_name || ""} size={100} />
                <div className="avatar-name">
                  <h2 className="name">{user.username}</h2>
                  <p className="tag">{user.tag}</p>
                </div>
              </div>

              <hr className="mobile-divider" />
              <div className="divider" />

              <div className="teir-container">
                <p className="teir">User's Tier</p>
                <Rating tag={Number(user.star) || 0} />
              </div>

              <div className="divider" />
              <hr className="mobile-divider" />

              <div className="amount-container">
                <p className="amount">{formatAmount(user.amount || 0)}</p>
                <p className="bank-details">
                  {user.acount}/{user.bank}
                </p>
              </div>
            </>
          )}
        </div>

        {user && (
          <>
            <div className="tab">
              <Tabs
                tabs={[
                  { id: "general", label: "General Details" },
                  { id: "documents", label: "Documents" },
                  { id: "bank", label: "Bank Details" },
                  { id: "loans", label: "Loans" },
                  { id: "savings", label: "Savings" },
                  { id: "app", label: "App and System" },
                ]}
                defaultTab="general"
                onTabChange={(tabId) => setActiveTab(tabId)}
              />
            </div>

            <div className="tab-content">
              {activeTab === "general" && <GeneralDetails user={user} />}
              {activeTab !== "general" && <NoContent />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
