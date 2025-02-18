import React, { useState, useEffect } from "react";
import { AddDepartment, AllDoctorData } from "../../../../../../Api/Api.jsx";
import { FloatingInput } from "../../../../../Utils/Form/FormUtils.jsx";
import FloatingSelect from "../../../../../Utils/Form/FloatingSelect.jsx";
import useFloatingLabel from "../../AddDoctor/FloatingLabel.jsx";

function AddDepartmentModal({ onClose, reload }) {
  const [allDoctor, setAllDoctors] = useState([]);
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("");
  const specialty = useFloatingLabel();
  const assignedDate = useFloatingLabel();
  const schedule = useFloatingLabel();
  const today = new Date().toISOString().split("T")[0];
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await AllDoctorData();
      setAllDoctors(response);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      doctor_id: selectedDoctorId,
      department: department,
      specialty: specialty.value,
      assignedDate: assignedDate.value,
      schedule: schedule.value,
      experience: experience,
      status: status,
    };

    try {
      await AddDepartment(formData);
      reload();
      onClose();
    } catch (error) {
      console.error("Error adding department:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex md:items-center justify-center p-4 overflow-x-auto h-full">
      <div className="bg-[#0c0f18] p-6 rounded-lg w-full overflow-x-auto md:max-w-[60%]">
        <h2 className="text-white text-xl font-semibold mb-2">
          Add Department
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0c0f18] flex flex-col md:gap-5">
          <div>
            <div className="flex max-md:flex-col md:gap-6 w-full">
              <div className="mt-5 relative w-full">
                <label className="absolute left-3 px-2 text-[#96a2b4] bg-[#0c0f18] transition-all top-[-10px] text-[12px]">
                  Doctor Name*
                </label>
                <select
                  className="w-full border border-[#96a2b4]/50 rounded px-4 py-4 bg-transparent text-[#96a2b4] outline-none focus:border-white"
                  value={selectedDoctorId} // Bind the selected value to state
                  onChange={(e) => setSelectedDoctorId(e.target.value)} // Update state correctly
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#1a202e]">
                    Select Doctor
                  </option>
                  {allDoctor.map((doctor) => (
                    <option
                      key={doctor.id}
                      value={doctor.id}
                      className="bg-[#1a202e]">
                      {doctor.firstName + " " + doctor.lastName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5 relative w-full">
                <FloatingSelect
                  label="Department"
                  options={[
                    "Urology",
                    "Dentist",
                    "Cardiology",
                    "Neurology",
                    "Pediatrics",
                    "Orthopedics",
                    "Dermatology",
                    "Psychiatry",
                    "Ophthalmology",
                  ]}
                  value={department}
                  onChange={setDepartment}
                  required
                />
              </div>
            </div>
            <div className="flex max-md:flex-col md:gap-6 w-full">
              <FloatingInput
                label="Specialty*"
                labelBgColor="#0c0f18"
                {...specialty}
              />
              <FloatingInput
                label="Assigned Date*"
                labelBgColor="#0c0f18"
                type="date"
                defaultValue={today}
                handleChange={(e) => console.log(e.target.value)}
                {...assignedDate}
              />
            </div>
            <div className="flex max-md:flex-col md:gap-6 w-full">
              <FloatingInput
                label="Schedule*"
                placeholder="Mon - Fri, 10:00 AM - 3:00 PM"
                labelBgColor="#0c0f18"
                {...schedule}
              />
              <div className="mt-5 relative w-full">
                <FloatingSelect
                  label="Experience Level"
                  options={["Junior", "Consultant", "Senior"]}
                  value={experience}
                  onChange={setExperience}
                />
              </div>
            </div>
            <div className="flex max-md:flex-col gap-6 w-full mt-6">
              <FloatingSelect
                label="Current Assignment Status"
                options={["Active", "Pending", "Inactive"]}
                value={status}
                onChange={setStatus}
                required
              />
            </div>
          </div>
          <div className="max-md:mt-5">
            <button
              type="submit"
              className="px-5 py-2 text-white bg-gray-500  rounded-4xl cursor-pointer">
              Save
            </button>
            <button
              type="button"
              className="ml-2 px-4 py-2 text-white bg-red-500 rounded-4xl cursor-pointer"
              onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDepartmentModal;
