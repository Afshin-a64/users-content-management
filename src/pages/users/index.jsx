import { useEffect, useState } from "react";
import { getUsersService } from "../../services/users";
import { IoMdPersonAdd } from "react-icons/io";
import UsersTable from "./_components/UsersTable";
import { Link } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const data = await getUsersService();
      setUsers(data || []);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">کاربران</h1>
        <Link to={'/users/add'} className="space-x-2 bg-blue-400 dark:bg-blue-900 text-gray-50 p-2 rounded-md cursor-pointer flex items-center justify-center">
          <IoMdPersonAdd className="inline" />
          <span>افزودن کاربر</span>
        </Link>
      </div>
      <UsersTable users={users}/>
    </div>
  );
}
