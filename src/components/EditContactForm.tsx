import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {  useNavigate, useParams } from "react-router-dom";

import { editUser } from "../redux/UserReducer";
 
const EditContactForm = () => {
    
    const dispatch = useDispatch()
    const {id }= useParams()
    const users = useSelector((state : any)=> state.users);
    const exisitingUser = users.filter((f:any) => f.id ==id);
    const {firstname , lastname , mobile , status} = exisitingUser[0]
    const [ufirstname , setfirstname] = useState(firstname)
    const [ulastname , setlastname] = useState(lastname)
    const [umobile , setmobile] = useState(mobile)
    const [ustatus , setstatus] = useState(status)

    const navigate = useNavigate()
    const handleEdit = (e : any)=>{
      e.preventDefault();
      dispatch(editUser({
        id:id,
        firstname: ufirstname,
        lastname:ufirstname,
        mobile:umobile,
        status:ustatus
      }))
      navigate("/")
    }

  return (
    <form className="flex flex-col gap-4 m-auto border-2 border-blue-500 p-7 rounded-md" onSubmit={handleEdit}>
      <h1 className="m-auto text-blue-500 font-bold text-xl">Edit Contact Form</h1>
      <input placeholder="FirstName" type="text" className="border-2 p-1"  value={ufirstname} onChange={e=> setfirstname(e.target.value)}/>
      <input placeholder="LastName" type="text" className="border-2 p-1"  value={ulastname} onChange={e=> setlastname(e.target.value)}/>
      <input
        placeholder="MobileNumber"
        type="tel"
       maxLength={10}
        className="border-2 p-1" value={umobile}
        onChange={e=> setmobile(e.target.value)}
      
      />
      <label>Status</label>
     
      <select
        className="w-full border border-gray-400 p-2 rounded-md"
        name="status"
        value={ustatus}
        onChange={e => setstatus(e.target.value)}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button className="bg-blue-500 text-white p-1 rounded font-bold">
        Save Contact
      </button>
    </form>
  );
};

export default EditContactForm;
