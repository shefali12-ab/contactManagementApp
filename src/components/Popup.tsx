import contactpfp from "../assets/icon-profile.png";
import { FunctionComponent } from "react";
interface User {
  id: number;
  firstname: string;
  lastname: string;
  mobile: string;
  status: string;
}

interface PopupProps {
  close: Function;
  el: User;
}
const Popup  = ({ close, el } : PopupProps)=> {



  return (
      <div className="fixed top-0    text-black left-0 w-full h-full  bg-opacity-20 bg-black flex items-center justify-center">
          <div className="bg-white drop-shadow-md rounded-md p-4 w-mid">
              <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium">Contact Details</h2>
                  <button className="text-gray-100 px-2 rounded-md bg-blue-500 hover:text-gray-800" onClick={() => close()}>
                      Close
                  </button>
              </div>
              <div key={el.id} className="bg-blue-400  m-4 p-4 text-black">
                  <div className="w-3/4 m-auto  ">
                      <img className="w-full rounded-full" src={contactpfp} alt="" />
                      
                  </div>
                  <div className=" p-6 text-center text-white text-lg ">
                      <p>First Name : {el.firstname}</p>
                      <p>Last Name  : {el.lastname}</p>
                      <p>Mobile   : {el.mobile}</p>
                      <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                  </div>


              </div>
          </div>
      </div>
  );
}

export default Popup