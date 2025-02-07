import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaPollHSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import Logo from "../../../assets/logo.png";
import adminImg from "../../../assets/admin-img.jpg";

function Sidebar() {
  const SideBarData = [
    {
      logo: <MdOutlineSpaceDashboard />,
      name: "Dashboard",
    },
    {
      logo: <LiaPollHSolid />,
      name: "Appointments",
    },
    {
      logo: <FaUserDoctor />,
      name: "Doctors",
    },
    {
      logo: <FaUserDoctor />,
      name: "Doctors",
    },
    {
      logo: <FaUserDoctor />,
      name: "Doctors",
    },
    {
      logo: <FaUserDoctor />,
      name: "Doctors",
    },
    {
      logo: <FaUserDoctor />,
      name: "Doctors",
    },
  ];

  return (
    <div className="p-4 bg-[#1a202e] text-white ">
      <div className="flex  items-center ">
        <span className="flex items-center gap-2 m-auto">
          <img src={Logo} />
          <span className="text-[24px] text-white">Cliniva</span>
        </span>
      </div>

      <div className="flex flex-col items-center gap-1 py-7">
        <img
          className="h-[75px] w-[75px] rounded-2xl border-3 border-white"
          src={adminImg}
        />
        <div className="flex flex-col gap-0.3 items-center">
          <span className="text-[14px] text-[#e6e6e6] font-bold opacity-95 font-[Roboto, sans-serif]">
            Dharmik odii
          </span>
          <span className="text-[11px] opacity-95 font-[Roboto, sans-serif]">
            ADMIN
          </span>
        </div>
      </div>
      <div className="mt-6">
        <span className="text-[12px] ml-3 text-[#9BABF1] font-medium font-[Roboto, sans-serif]">
          MAIN
        </span>
      </div>
      {SideBarData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-2 py-3.5 mt-2.5 hover:bg-gray-700 rounded cursor-pointer">
          <span className="text-[20px] text-[#b2b6bf]">{item.logo}</span>
          <span className="text-[14px] tetx-[#cfd8e3] opacity-75 font-bold  font-[Roboto, sans-serif]">
            {item.name}
          </span>
          <span className="ml-auto text-[14px] text-[#CFD8E3] font-[Roboto, sans-serif]">
            <FaPlus />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
