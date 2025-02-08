import React, { useEffect, useState } from "react";
import { SideBarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import Logo from "../../../assets/logo.png";
import adminImg from "../../../assets/admin-img.jpg";

const Sidebar = () => {
  const [openCategories, setOpenCategories] = useState({ 0: true });

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-4 bg-[#1a202e] text-white h-[100vh] overflow-y-auto no-scrollbar">
      {/* Logo Section */}
      <div className="flex items-center justify-center fixed bg-[#1a202e] w-[200px]">
        <span className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 ml-5"
          />
          <span className="text-[24px] font-bold">Cliniva</span>
        </span>
      </div>

      {/* Admin Profile */}
      <div className="flex flex-col items-center gap-2 py-7 pt-20 ">
        <img
          className="h-[75px] w-[75px] rounded-2xl border-2 border-white"
          src={adminImg}
          alt="Admin"
        />
        <div className="flex flex-col items-center">
          <span className="text-[14px] text-[#e6e6e6] font-bold">
            Dharmik Odedara
          </span>
          <span className="text-[11px] opacity-95">ADMIN</span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="mt-6">
        <span className="text-[12px] ml-3 text-[#9BABF1] font-medium">
          MAIN
        </span>
      </div>

      {SideBarData.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          index={index}
          openCategories={openCategories}
          toggleCategory={toggleCategory}
        />
      ))}
    </div>
  );
};

export default Sidebar;
