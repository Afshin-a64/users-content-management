import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block hover:bg-blue-100 dark:hover:bg-gray-700 p-2 ml-2 rounded-sm ${
          isActive ? "bg-blue-300 dark:bg-gray-800" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default SidebarItem