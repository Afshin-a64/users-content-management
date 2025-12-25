import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
import { IoMdPersonAdd } from "react-icons/io";
import {FaEdit, FaTrash} from 'react-icons/fa';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const data = await getUsers();
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
        <button className="space-x-2 bg-blue-400 dark:bg-blue-900 text-gray-50 p-2 rounded-md cursor-pointer flex items-center justify-center">
          <IoMdPersonAdd className="inline" />
          <span>افزودن کاربر</span>
        </button>
      </div>
      <div className="overflow-hidden rounded-xl flex items-center justify-center mt-3">
        <table className="table-auto w-full">
          <thead className="bg-blue-400 dark:bg-blue-900">
            <tr>
              <th className="px-4 py-2 text-center!">#</th>
              <th className="px-4 py-2 text-center!">نام</th>
              <th className="px-4 py-2 text-center!">ایمیل</th>
              <th className="px-4 py-2 text-center!">شماره تلفن</th>
              <th className="px-4 py-2 text-center!">وبسایت</th>
              <th className="px-4 py-2 text-center!">عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 dark:bg-gray-800 divide-y-2">
            {users.map((user) => (
              <tr>
                <td className="px-4 py-2 text-center!">{user.id}</td>
                <td className="px-4 py-2 text-center!">{user.name}</td>
                <td className="px-4 py-2 text-center!">{user.email}</td>
                <td className="px-4 py-2 text-center!">{user.phone}</td>
                <td className="px-4 py-2 text-center!">{user.website}</td>
                <td className="px-4 py-2 flex justify-center gap-3 text-xl">
                  <FaEdit className="text-yellow-500 cursor-pointer"/>
                  <FaTrash className="text-red-600 cursor-pointer"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
