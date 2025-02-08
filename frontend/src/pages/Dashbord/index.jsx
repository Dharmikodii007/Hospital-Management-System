import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import AddDoctor from "./DhasboardPages/Doctors/AddDoctor";
import { useSelector } from "react-redux";

function Index() {
  const CurrentPage = useSelector((state) => state.sidebar.page);

  // Mapping page names to actual components
  const renderPage = () => {
    switch (CurrentPage) {
      case "AddDoctor":
        return <AddDoctor />;
      default:
        return <AddDoctor />;
    }
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-[19%] h-full shadow-[0px_8px_10px_0px_rgba(183,192,206,0.2)]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-[81%] flex flex-col h-full">
        <Navbar className="shadow-[0px_2px_5px_0px_rgba(0, 0, 0, 0.25)]" />
        <div className="overflow-y-auto no-scrollbar flex-grow shadow-[0px_8px_10px_0px_rgba(183,192,206,0.2)]">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default Index;
