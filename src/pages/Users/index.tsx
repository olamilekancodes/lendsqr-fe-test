import { PageTitle } from "../../shared/PageTitle";
import { EllipsisVertical } from "lucide-react";

import activeUser from "../../assets/icons/user/active-user.png";
import userSavings from "../../assets/icons/user/user-savings.png";
import userLoan from "../../assets/icons/user/users-loan.png";
import user from "../../assets/icons/user/users.png";
import "./Users.scss";
import usePagination from "../../hooks/usePagination";
import SimpleTableWrapper from "../../shared/TableWrapper";
import { getComparator, stableSort } from "../../shared/utils/sort";
import StyledTd from "../../shared/StyledTableCell";
import { StatusChip } from "./../../shared/StatusChip/index";
import { formatDateTime } from "../../shared/utils/dateformatter";
import { CustomPagination } from "../../shared/Pagination";
import { getUsers } from "../../api/users";

interface dataType {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

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
                <StyledTd>
                  {date_joined && formatDateTime(date_joined)}
                </StyledTd>
                <StyledTd>
                  <StatusChip status={status} />
                </StyledTd>
                <StyledTd className="actions-cell">
                  <EllipsisVertical size={18} />
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
