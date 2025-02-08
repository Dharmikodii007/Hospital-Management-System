import React from "react";
import { FaUserInjured } from "react-icons/fa";
import adminImg from "../../../assets/admin-img.jpg";

function Navbar() {
  return (
    <div className="flex justify-end  bg-[#1a202e] text-white p-3.5 ">
      <div className="flex gap-3 items-center ">
        <FaUserInjured />
        <span>Dhamrik Odii</span>
        <img
          src={adminImg}
          className="w-[30px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
