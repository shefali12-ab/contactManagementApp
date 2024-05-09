import ContactForm from "./components/ContactForm";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import EditContactForm from "./components/EditContactForm";
import ChartsMaps from "./pages/ChartsMaps";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const { pathname } = location;
  // console.log(location)

  return (
    <div>
      <nav className="flex justify-center items-center bg-blue-600 text-white text-bold p-6 text-3xl">
        {pathname == "/" ? "Contact Management App" : "Charts And Maps"}
      </nav>
      <div className="flex w-full ">
        <Sidebar />

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
