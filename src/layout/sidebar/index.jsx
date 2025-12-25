import Darkmode from "../../components/Darkmode";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="fixed top-0 right-0 w-64 h-screen">
      <div className="flex flex-col">
        {/* top content */}
        <div className="h-16 bg-blue-300 dark:bg-gray-900 font-bold shadow-md flex items-center justify-between p-5">
          <h2>پنل مدیریت</h2>
          <div>
            <Darkmode/>
          </div>
        </div>
        {/* bottom content */}
        <div className="h-screen pr-4 pt-2 bg-blue-200 dark:bg-gray-900">
          <ul className="font-bold">
            <li className="">
              <SidebarItem to={"/users"}>کاربران</SidebarItem>
            </li>
            <li className="">
              <SidebarItem to={"/posts"}>پست ها</SidebarItem>
            </li>
            <li className="">
              <SidebarItem to={"/comments"}>کامنت ها</SidebarItem>
            </li>
            <li className="">
              <SidebarItem to={"/tasks"}>تسک ها</SidebarItem>
            </li>
            <li className="">
              <SidebarItem to={"/gallery"}>گالری</SidebarItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


