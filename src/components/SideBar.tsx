import { Link } from "react-router-dom";

import { FaChartLine } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const SideBar = () => {
  return (
    <div className=" flex flex-col gap-6 w-60 h-screen border-r-2 p-3 ">
      <h1 className="text-xl ">Dashboard</h1>

      <div className="flex items-center gap-4  hover:bg-blue-200 p-2 rounded">
        <MdContacts className="text-2xl" />

        <Link to="/" className="text-sm " >
          Contacts
        </Link>
      </div>

      <div className="flex items-center gap-4 hover:bg-blue-200 p-2 rounded">
        <FaChartLine className="text-2xl" />

        <Link to="/chart" className="text-sm">
          Charts And Maps
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
