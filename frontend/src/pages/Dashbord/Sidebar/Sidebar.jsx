import React, { useEffect, useState } from "react";
import { SideBarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import Logo from "../../../assets/logo.png";
import adminImg from "../../../assets/admin-img.jpg";
import { getAdmin } from "../../../Api/Api";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [openCategories, setOpenCategories] = useState({ 0: true });
  const [admin, setAdmin] = useState({});
  const Currentmenu = useSelector((state) => state.sidebar.menu);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await getAdmin();
        setAdmin(response);
      } catch (error) {
        console.error("Error fetching admin:", error);
      }
    };

    fetchAdmin();
  }, []);

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    console.log("Updated Sidebar Visibility:", Currentmenu);
  }, [Currentmenu]);

  return (
    <div
      className={`p-4 text-white h-full overflow-y-auto no-scrollbar bg-[#1a202e]  `}>
      {/* Logo Section */}
      <div className="flex items-center justify-center  bg-[#1a202e]  pb-4">
        <span className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className={``}
          />
          <span
            className={`text-[24px] font-bold ${
              Currentmenu ? "block" : "hidden"
            }`}>
            Cliniva
          </span>
        </span>
      </div>

      {/* Admin Profile */}
      <div
        className={`flex flex-col items-center gap-2 py-7 pt-10 ${
          Currentmenu ? "block" : "hidden"
        }`}>
        <img
          className="h-[75px] w-[75px] rounded-2xl border-2 border-white"
          src={adminImg}
          alt="Admin"
        />
        <div className="flex flex-col items-center">
          <span className="text-[14px] text-[#e6e6e6] font-bold">
            {admin?.username || "Admin"}
          </span>
          <span className="text-[11px] opacity-95">ADMIN</span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`mt-6 ${Currentmenu ? "block" : "hidden"}`}>
        <span className={`"text-[12px] ml-3 text-[#9BABF1] font-medium `}>
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
