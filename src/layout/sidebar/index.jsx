export default function Sidebar() {
  return (
    <div className="fixed top-0 right-0 bg-blue-200 w-64 h-screen">
      <div className="flex flex-col">
        {/* top content */}
        <div className="h-16 bg-blue-300 font-bold shadow-md flex justify-between p-5">
            <h2>پنل مدیریت</h2>
            <p>darkmode</p>
        </div>
        {/* bottom content */}
        <div className="h-screen pr-4 pt-2 bg-blue-200">
            <ul className="font-bold">
                <li className="hover:bg-blue-100 p-2 ml-2 rounded-sm">
                    <p>کاربران</p>
                </li>
                <li className="hover:bg-blue-100 p-2 ml-2 rounded-sm">
                    <p>پست ها</p>
                </li>
                <li className="hover:bg-blue-100 p-2 ml-2 rounded-sm">
                    <p>کامنت ها</p>
                </li>
                <li className="hover:bg-blue-100 p-2 ml-2 rounded-sm">
                    <p>تسک ها</p>
                </li>
                <li className="hover:bg-blue-100 p-2 ml-2 rounded-sm">
                    <p>گالری</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
