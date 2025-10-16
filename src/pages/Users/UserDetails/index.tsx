import { useParams } from "react-router-dom";
import { getUsers } from "../../../api/users";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();

  const users = getUsers();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details">
      <h1>{user.username}</h1>
      <p>{user.id}</p>
    </div>
  );
};

export default UserDetails;
