
import {  Route, Routes , useLocation} from "react-router-dom";

import Contacts from "./pages/Contacts";
import ChartsMaps from "./pages/ChartsMaps";

import EditContactForm from "./components/EditContactForm";
import ContactForm from "./components/ContactForm";
import SideBar from "./components/SideBar";


function App() {
  const location = useLocation();
  const { pathname } = location;
  // console.log(location)

  return (
    <div>
      <nav className="flex justify-center items-center bg-blue-600 text-white text-bold p-6 lg:text-3xl sm:text-xl">
        {pathname == "/chart" ? "Charts And Maps" : "Contact Management App"}
      </nav>
      <div className="flex w-full ">
        <SideBar />

        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/edit/:id" element={<EditContactForm />} />
          <Route path="/chart" element={<ChartsMaps />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
