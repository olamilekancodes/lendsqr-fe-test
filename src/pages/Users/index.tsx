import { PageTitle } from "../../shared/PageTitle";
import { useState } from "react";
import { Eye, UserX, UserRoundCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Users.scss";
import usePagination from "../../hooks/usePagination";
import SimpleTableWrapper from "../../shared/TableWrapper";
import { getComparator, stableSort } from "../../shared/utils/sort";
import StyledTd from "../../shared/StyledTableCell";
import { StatusChip } from "./../../shared/StatusChip/index";
import { formatDate } from "../../shared/utils/dateformatter";
import { CustomPagination } from "../../shared/Pagination";
import { getUsers } from "../../api/users";
import ActionMenu from "../../shared/ActionMenu";
import { getCardContent } from "../../api/card";

interface dataType {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

const headCells = [
  { id: "organization", label: "Organization" },
  { id: "username", label: "Username" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone Number" },
  { id: "date_joined", label: "Date Joined" },
  { id: "status", label: "Status" },
  { id: "actions", label: "" },
];

const Users = () => {
  const data = getUsers();
  const cardContents = getCardContent();

  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState<dataType | null>(null);

  console.log(selectedUser);

  const {
    order,
    orderBy,
    current_data,
    total_pages,
    current_page,
    setCurrentPage,
    handleRequestSort,
    setItemPerPage,
    items_per_page,
  } = usePagination({
    data: data,
    order_control: "id",
  });

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
      <SimpleTableWrapper
        handleRequestSort={handleRequestSort}
        headCells={headCells}
        order={order}
        orderBy={orderBy}
      >
        {stableSort(current_data, getComparator(order, orderBy)).map(
          (data: dataType) => {
            const {
              id,
              organization,
              username,
              date_joined,
              email,
              phone_number,
              status,
            } = data;
            return (
              <tr key={id}>
                <StyledTd>{organization}</StyledTd>
                <StyledTd>{username}</StyledTd>
                <StyledTd>{email}</StyledTd>
                <StyledTd>{phone_number}</StyledTd>
                <StyledTd>{date_joined && formatDate(date_joined)}</StyledTd>
                <StyledTd>
                  <StatusChip status={status} />
                </StyledTd>
                <StyledTd className="actions-cell">
                  <ActionMenu
                    toggleAction={() => setSelectedUser(data)}
                    items={[
                      {
                        label: (
                          <div className="menu-item-content">
                            <Eye size={16} />
                            <span>View Details</span>
                          </div>
                        ),
                        onClick: () => navigate(`/users/${id}`),
                      },
                      {
                        label: (
                          <div className="menu-item-content">
                            <UserX size={16} />
                            <span>Blacklist User</span>
                          </div>
                        ),
                      },
                      {
                        label: (
                          <div className="menu-item-content">
                            <UserRoundCheck size={16} />
                            <span>Activate User</span>
                          </div>
                        ),
                      },
                    ]}
                  />
                </StyledTd>
              </tr>
            );
          }
        )}
      </SimpleTableWrapper>
      <CustomPagination
        current_page={current_page}
        total_pages={total_pages}
        items_per_page={items_per_page}
        setCurrentPage={setCurrentPage}
        setItemPerPage={setItemPerPage}
      />
    </>
  );
};

export default Users;
