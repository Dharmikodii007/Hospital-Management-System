import React, { useEffect, useState } from "react";
import { FaUserInjured } from "react-icons/fa";
import adminImg from "../../../assets/admin-img.jpg";
import { getAdmin } from "../../../Api/Api";
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setMenu } from "../../../Redux/slices/sidebarSlice";

function Navbar() {
  const [admin, setAdmin] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

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

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
    dispatch(setMenu(!isOpen));
  };

  return (
    <div className="flex justify-between items-center bg-[#1a202e] text-white p-4 shadow-md">
      {/* Sidebar Toggle Button */}
      <button
        className="cursor-pointer"
        onClick={handleToggleMenu}>
        <IoMdMenu fontSize={26} />
      </button>

      {/* Admin Info */}
      <div className="flex gap-3 items-center">
        <FaUserInjured className="text-lg" />
        <span className="text-sm font-semibold">
          {admin?.username || "Admin"}
        </span>
        <img
          src={adminImg}
          className="w-8 h-8 rounded-full border-2 border-white"
          alt="Admin"
        />
      </div>
    </div>
  );
}

export default Navbar;
