
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/UserReducer';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ContactForm = () => {
  const [firstname , setfirstname] = useState('')
  const [lastname , setlastname] = useState('')
  const [mobile , setmobile] = useState('')
  const [status , setstatus] = useState('active')
  const users = useSelector((state)=> state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void; }) =>{
    //console.log("clicked")
   e.preventDefault();
   dispatch(addUser({ id : users.length, firstname , lastname , mobile,status}))
   navigate("/")
  }
  return (
    <form className="flex flex-col gap-4 m-auto border-2 border-blue-500 p-7 rounded-md " onSubmit={handleSubmit}>
      <h1 className="m-auto text-blue-500 font-bold text-xl">Create Contact</h1>
      <input
        placeholder="FirstName"
        type="text"
        className="border-2 p-1  border-blue-500"
        name="first_name"
        value={firstname}
        onChange={ e=> setfirstname(e.target.value)}
      />
      <input
        placeholder="LastName"
        type="text"
        className="border-2 p-1  border-blue-500"
        name="last_name"
        value={lastname}
        onChange={e=>setlastname(e.target.value)}
      />
      <input
        placeholder="MobileNumber"
        type="number"
      
        className="border-2 p-1  border-blue-500"
        name="mob"
        value={mobile}
        onChange={e => setmobile(e.target.value)}
      />
      <label>Status</label>
      <select
        className="w-full border border-gray-400 p-2 rounded-md"
        name="status"
        value={status}
        onChange={e => setstatus(e.target.value)}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button className="bg-blue-500 text-white p-1 rounded font-bold" >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;
