import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import contact from "../assets/searchimg1.jpg";
import { Link } from "react-router-dom";
import contactpfp from "../assets/icon-profile.png";
import Popup from "../components/Popup";
import { deleteUser } from "../redux/UserReducer";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  status: string;
}

const Contacts = () => {
  const AllContacts = useSelector((state) => state.users); // Initialize as empty array if undefined
  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState({});
  const dispatch = useDispatch();
  const togglePopup = (contact) => {
    setSingleContact(contact);

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Any side effects or dispatch actions can be placed here
  }, [dispatch, AllContacts.length]);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="m-4 mt-[7rem]">
        <Link to="/contactform">
          <button className="rounded-full bg-blue-500 text-white text-sm p-4">
            Create Contact
          </button>
        </Link>
      </div>

      {AllContacts.length === 0 && (
        <div
         
          className="h-screen w-full flex flex-col items-center text-center"
        >
          <img
            src={contact}
            alt="search image"
            className="object-contain h-[50%] w-[30%]"
          />
          <p className="text-2xl text-blue-500 font-bold m-4">
            No Contact Found Please add contact using <br /> create contact
            button
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AllContacts.map((el) => {
          return (
            <div   onClick={() => togglePopup(el)} className="   p-2 rounded-lg  m-3 bg-blue-400 text-white">
              <div className="w-3/4 m-auto">
                <img
                  src={contactpfp}
                  alt="profile pic"
                  className="w-full rounded-full"
                />
                <div>
                  {isOpen && (
                    <Popup close={() => togglePopup(data)} el={singleContact} />
                  )}
                   {/* <Popup close={() => togglePopup(data)} el={singleContact} /> */}
                </div>
                <div key={el.id} className="p-4">
                  <div className="text-lg">
                    <p>First Name : {el.firstname}</p>
                    <p>Last Name : {el.lastname}</p>

                    <p>
                      Status : {el.status == "active" ? "Active" : "Inactive"}
                    </p>
                  </div>
                  <div className="flex  justify-between my-2">
                    <Link to={`/edit/${el.id}`}>
                      <button className=" bg-blue-500 text-white p-2 rounded ">
                        Edit
                      </button>
                    </Link>
                    <button
                      className=" bg-blue-500 text-white p-2 rounded "
                      onClick={() => handleDelete(el.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
