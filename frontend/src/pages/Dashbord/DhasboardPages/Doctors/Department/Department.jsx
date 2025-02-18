import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { AllDepartmentData, dltDepartment } from "../../../../../Api/Api";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { setUpdateId } from "../../../../../Redux/slices/sidebarSlice";
import AddDepartmentModal from "./AddDepartment/AddDepartment";
import UpdateDepartmentModal from "./UpdateDepartment/UpadateDepartment";
import SearchBar from "./SearchBar/SearchBar";
import DepartmentTable from "./DepartmentTable/DepartmentTable";
import Actions from "./Actions/Action";
import handleDownloadExcel from "./DowloadData/DowloadData";

function DepartmentDoctor() {
  const [Doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await AllDepartmentData();
      setDoctors(response);
      setFilteredDoctors(response);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const dleteDepartment = async (id) => {
    try {
      await dltDepartment(id);
      fetchDoctors();
    } catch (error) {
      console.error("Error deleting doctors:", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filtered = Doctors.filter((doctor) => {
      if (!doctor?.Department) return false;
      return (
        doctor.Department.doctorName.toLowerCase().includes(query) ||
        doctor.Department.department.toLowerCase().includes(query) ||
        doctor.Department.specialty.toLowerCase().includes(query) ||
        doctor.Department.experience.toLowerCase().includes(query) ||
        doctor.Department.schedule.toLowerCase().includes(query) ||
        doctor.Department.status.toLowerCase().includes(query) ||
        doctor.Department.assignedDate.toLowerCase().includes(query)
      );
    });

    setFilteredDoctors(filtered);
  };

  const UpdateModel = (id) => {
    dispatch(setUpdateId(id));
    setShowUpdateModal(true);
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-[#232b3e] text-[#96a2b4] px-4 sm:px-7 pt-4 flex flex-wrap items-center gap-2">
        <span className="text-[16px] sm:text-[20px] font-semibold">
          Assign Department &gt;
        </span>
        <span className="flex items-center gap-1 sm:gap-2">
          <FiHome className="text-[16px] sm:text-[18px]" />
          <span className="hidden sm:inline">&gt;</span>
        </span>
        <span className="hidden sm:inline">Doctors &gt;</span>
        <span>Assign Department</span>
      </div>

      <div className="bg-[#232b3e] text-[#96a2b4] min-h-screen p-4">
        {/* Header Start */}

        <div className="flex flex-col sm:flex-row justify-between items-center bg-black p-4 rounded-t-2xl">
          <div className="flex gap-3 items-center">
            <span className="text-[16px] font-semibold text-[#96a2b4]">
              Assign Department
            </span>
            <SearchBar
              search={search}
              handleSearch={handleSearch}
            />
          </div>
          <Actions
            setShowModal={setShowModal}
            fetchDoctors={fetchDoctors}
            handleDownload={() => handleDownloadExcel(Doctors)}
          />
        </div>

        {/* Header End */}

        {/* Department Data Table Start */}

        <DepartmentTable
          doctors={filteredDoctors}
          deleteDepartment={dleteDepartment}
          updateDepartment={UpdateModel}
        />

        {/* Department Data Table End */}

        {/* Modal Popup For Add Data Start */}

        {showModal && (
          <AddDepartmentModal
            onClose={() => setShowModal(false)}
            reload={() => fetchDoctors()}
          />
        )}

        {/* Modal Popup For Add Data End */}

        {/* Modal Popup For Update Data Start */}

        {showUpdateModal && (
          <UpdateDepartmentModal
            onClose={() => setShowUpdateModal(false)}
            reload={() => fetchDoctors()}
          />
        )}

        {/* Modal Popup For Add Data End */}

        {/* Mobile View Start */}
        <div className="md:hidden mt-4 space-y-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) =>
              doctor?.Department ? (
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
                      <p className="text-white font-semibold">
                        {doctor.Department.doctorName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {doctor.Department.department}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-[#96a2b4] space-y-2">
                    <p>{doctor.Department.specialty}</p>
                    <p>{doctor.Department.schedule}</p>
                    <p>{doctor.Department.experience}</p>
                    <p>{doctor.Department.status}</p>
                    <p>
                      {doctor.Department.assignedDate
                        ? format(
                            new Date(doctor.Department.assignedDate),
                            "dd-MM-yyyy"
                          )
                        : "N/A"}
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 mt-3">
                    <FaRegEdit
                      className="text-blue-400 cursor-pointer hover:text-blue-500"
                      size={20}
                      onClick={() => UpdateModel(doctor.Department.id)}
                    />
                    <MdDelete
                      className="text-red-400 cursor-pointer hover:text-red-500"
                      size={20}
                      onClick={() => dleteDepartment(doctor.Department.id)}
                    />
                  </div>
                </div>
              ) : null
            )
          ) : (
            <p className="text-center text-white">No doctors found.</p>
          )}
        </div>
      </div>

      {/* Mobile View End */}
    </>
  );
}

export default DepartmentDoctor;
