
import { FaChartLine } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import {Link }  from "react-router-dom";


const Sidebar = () => {
   

  return (
    <div className=" flex flex-col gap-6 w-60 h-screen border-r-2 p-3 ">
       
        <h1 className="text-xl ">Dashboard</h1>
      
        <div className="flex items-center gap-4">
   
       
         <MdContacts className="text-2xl" />
        {/* <p text-sm>Contacts</p> */}
        <Link to="/" className="text-sm">Contacts</Link>
      
       
     
       
        </div>
       
       
        <div className="flex items-center gap-4">
      
       <FaChartLine className="text-2xl" />
        {/* <p className="text-sm">Charts And Maps</p> */}
        <Link to="/chart" className="text-sm">Charts And Maps</Link>
     
        </div>

       
        
    </div>
  )
}

export default Sidebar