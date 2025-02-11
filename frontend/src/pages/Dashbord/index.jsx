import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import AddDoctor from "./DhasboardPages/Doctors/AddDoctor/AddDoctor";
import AllDoctor from "./DhasboardPages/Doctors/AllDoctor/AllDoctor";
import { useSelector } from "react-redux";

function Index() {
  const CurrentPage = useSelector((state) => state.sidebar.page);
  const Currentmenu = useSelector((state) => state.sidebar.menu);
  const [isOpen, setIsOpen] = useState(Currentmenu);

  // Mapping page names to actual components
  const renderPage = () => {
    switch (CurrentPage) {
      case "AddDoctor":
        return <AddDoctor />;
      case "AllDoctor":
        return <AllDoctor />;
      default:
        return <AllDoctor />;
    }
  };

  useEffect(() => {
    setIsOpen(Currentmenu);
    console.log(isOpen);
  }, [Currentmenu]);

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`h-full shadow-[0px_8px_10px_0px_rgba(183,192,206,0.2)] ${
          Currentmenu ? "md:w-[23%]" : "md:w-auto"
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

export default Index;
