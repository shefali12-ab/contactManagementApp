import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { addUser } from "../redux/UserReducer";

const ContactForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("active");
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    //console.log("clicked")
    e.preventDefault();
    dispatch(
      addUser({ id: users.length, firstName, lastName, mobile, status })
    );
    navigate("/");
  };
  return (
    <form
      className="flex flex-col gap-4 m-auto border-2 border-blue-500 p-7 rounded-md "
      onSubmit={handleSubmit}
    >
      <h1 className="m-auto text-blue-500 font-bold text-xl">Create Contact</h1>
      <input
        placeholder="FirstName"
        type="text"
        className="border-2 p-1  border-blue-500"
        name="first_name"
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        placeholder="LastName"
        type="text"
        className="border-2 p-1  border-blue-500"
        name="last_name"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        placeholder="MobileNumber"
        type="tel"
       maxLength={10}
        className="border-2 p-1  border-blue-500"
        name="mob"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        
      />
      <label>Status</label>
      <select
        className="w-full border border-gray-400 p-2 rounded-md"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
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

export default ContactForm;
