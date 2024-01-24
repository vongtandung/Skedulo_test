import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import './style.css'

const UserTable = () => {

  const users = useSelector((state) => state.list);


  return <table className="user-table-wrapper">
    <thead className="header">
      <tr key="header-key">
      <th>Avatar</th>
      <th>User Name</th>
      <th>Type</th>
      <th>Score</th>
      </tr>
    </thead>
  <tbody>
    {
      (users || []).map(user => <UserItem key={user?.id} {...user} />)
    }
    </tbody>
  </table>;
};

export default UserTable;
