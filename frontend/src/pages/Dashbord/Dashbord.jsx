import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import AddDoctor from "./DhasboardPages/Doctors/AddDoctor/AddDoctor";
import AllDoctor from "./DhasboardPages/Doctors/AllDoctor/AllDoctor";
import DepartmentDoctor from "./DhasboardPages/Doctors/Department/Department";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  const CurrentPage = useSelector((state) => state.sidebar.page);
  const Currentmenu = useSelector((state) => state.sidebar.menu);

  const [isOpen, setIsOpen] = useState(Currentmenu);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Mapping page names to actual components
  const renderPage = () => {
    switch (CurrentPage) {
      case "AddDoctor":
        return <AddDoctor />;
      case "AllDoctor":
        return <AllDoctor />;
      case "DoctorDepartment":
        return <DepartmentDoctor />;
      default:
        return <DepartmentDoctor />;
    }
  };

  useEffect(() => {
    setIsOpen(Currentmenu);
    console.log(isOpen);
  }, [Currentmenu]);

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#1a202e] text-white">
        <h1 className="text-3xl font-bold mb-4">
          You are not logged in. Please log in!
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`h-full max-md:absolute z-50  shadow-[0px_8px_10px_0px_rgba(183,192,206,0.2)] ${
          Currentmenu ? "md:w-auto z-50" : "md:w-[23%]"
        }`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col h-full">
        <Navbar className="shadow-[0px_2px_5px_0px_rgba(0, 0, 0, 0.25)]" />
        <div className="overflow-y-auto no-scrollbar flex-grow shadow-[0px_8px_10px_0px_rgba(183,192,206,0.2)]">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
