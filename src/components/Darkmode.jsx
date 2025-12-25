import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { useDarkmode } from "../hooks/useDarkmode";

const Darkmode = () => {
  const {setDark, setLight} = useDarkmode()

  return (
    <span>
      <FiMoon onClick={setDark} className="dark:hidden cursor-pointer text-xl" />
      <FiSun onClick={setLight} className="hidden dark:inline cursor-pointer text-xl" />
    </span>
  );
};

export default Darkmode