import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiRefreshCw } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegEdit, FaPhoneAlt } from "react-icons/fa";
import adminImg from "../../../../../assets/admin-img.jpg";
import { AllDoctorData, dltDoctorData } from "../../../../../Api/Api";

function AllDoctor() {
  const [Doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await AllDoctorData();
        setDoctors(response);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const DeleteDoctor = async (id) => {
    try {
      await dltDoctorData(id);
      alert("Doctor Deleted!");
      const updatedDoctors = await AllDoctorData();
      setDoctors(updatedDoctors);
    } catch (error) {
      console.error("Error Deleting doctor:", error);
    }
  };

  return (
    <div className="bg-[#232b3e] text-[#96a2b4] min-h-screen p-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-black p-4 rounded-t-2xl">
        <div className="flex gap-3 items-center">
          <span className="text-lg font-semibold text-white">Doctors</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#12161f] text-white px-3 py-2 rounded-md pl-8 outline-none w-full sm:w-auto"
            />
            <IoSearchOutline
              className="absolute left-2 top-3 text-white"
              size={16}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <button className="p-2 rounded-md cursor-pointer">
            <IoMdAddCircleOutline
              size={24}
              className="text-[#96a2b4]"
            />
          </button>
          <button className="p-2 cursor-pointer">
            <FiRefreshCw
              size={24}
              className="text-[#96a2b4]"
            />
          </button>
          <button className="p-2 cursor-pointer">
            <HiDownload
              size={24}
              className="text-[#96a2b4]"
            />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1a202e] text-[#96a2b4] text-sm">
          {/* Table Head */}
          <thead className="bg-[#1a202e] border-b-[0.5px] border-[#96a2b4] hidden md:table-header-group">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Mobile</th>
              <th className="p-2 text-left">Education</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">DOB</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="border-b-[0.5px] border-[#96a2b4]">
            {Doctors.length > 0 ? (
              Doctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  className="hover:bg-gray-600 transition hidden md:table-row">
                  <td className="p-4 flex gap-2 items-center">
                    <img
                      src={doctor.doctorimg}
                      className="w-[30px] h-[30px] rounded-full"
                      alt="Doctor"
                    />
                    {doctor.firstName}
                  </td>
                  <td className="p-2">{doctor.department}</td>
                  <td className="p-2 flex items-center gap-2">
                    <FaPhoneAlt size={16} />
                    {doctor.mobile}
                  </td>
                  <td className="p-2">{doctor.education}</td>
                  <td className="p-2 flex items-center gap-2">
                    <HiOutlineMail size={20} />
                    {doctor.email}
                  </td>
                  <td className="p-2">{doctor.birth}</td>
                  <td className="p-2 flex gap-3">
                    <FaRegEdit
                      className="text-blue-400 cursor-pointer hover:text-blue-500"
                      size={22}
                    />
                    <MdDelete
                      className="text-red-400 cursor-pointer hover:text-red-500"
                      size={22}
                      onClick={() => DeleteDoctor(doctor.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-4">
                  No doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Responsive Cards for Mobile */}
      <div className="md:hidden mt-4 space-y-4">
        {Doctors.length > 0 ? (
          Doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-[#1a202e] p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <img
                  src={doctor.doctorimg}
                  className="w-12 h-12 rounded-full"
                  alt="Doctor"
                />
                <div>
                  <p className="text-white font-semibold">{doctor.firstName}</p>
                  <p className="text-sm text-gray-400">{doctor.department}</p>
                </div>
              </div>
              <div className="mt-3 text-sm text-[#96a2b4] space-y-2">
                <p>
                  <FaPhoneAlt
                    size={14}
                    className="inline mr-2"
                  />
                  {doctor.mobile}
                </p>
                <p>
                  <HiOutlineMail
                    size={14}
                    className="inline mr-2"
                  />
                  {doctor.email}
                </p>
                <p>DOB: {doctor.birth}</p>
                <p>Education: {doctor.education}</p>
              </div>
              <div className="flex justify-end gap-3 mt-3">
                <FaRegEdit
                  className="text-blue-400 cursor-pointer hover:text-blue-500"
                  size={20}
                />
                <MdDelete
                  className="text-red-400 cursor-pointer hover:text-red-500"
                  size={20}
                  onClick={() => DeleteDoctor(doctor.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default AllDoctor;
