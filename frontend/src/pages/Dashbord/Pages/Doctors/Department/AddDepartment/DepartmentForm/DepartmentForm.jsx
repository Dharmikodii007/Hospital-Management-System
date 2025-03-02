import React from "react";
import { FloatingInput } from "../../../../../../Utils/Form/FormUtils.jsx";
import FloatingSelect from "../../../../../../Utils/Form/FloatingSelect.jsx";

function DepartmentForm({
  onClose,
  floatingLabels,
  submitForm,
  loading,
  doctors,
  doctorLoading,
  selectedDoctorId,
  setSelectedDoctorId,
  department,
  setDepartment,
  experience,
  setExperience,
  status,
  setStatus,
}) {
  const today = new Date().toISOString().split("T")[0];

  const { specialty, assignedDate, schedule } = floatingLabels;

  return (
    <form
      onSubmit={submitForm}
      className="bg-[#0c0f18] flex flex-col md:gap-5">
      <div>
        <div className="flex max-md:flex-col md:gap-6 w-full">
          <div className="mt-5 relative w-full">
            <label className="absolute left-3 px-2 text-[#96a2b4] bg-[#0c0f18] transition-all top-[-10px] text-[12px]">
              Doctor Name*
            </label>
            <select
              className="w-full border border-[#96a2b4]/50 rounded px-4 py-4 bg-transparent text-[#96a2b4] outline-none focus:border-white"
              value={selectedDoctorId}
              onChange={(e) => setSelectedDoctorId(e.target.value)}>
              <option
                value=""
                disabled
                className="bg-[#1a202e]">
                {doctorLoading ? "Loading doctors..." : "Select Doctor"}
              </option>
              {doctors &&
                doctors.map((doctor) => (
                  <option
                    key={doctor.id}
                    value={doctor.id}
                    className="bg-[#1a202e]">
                    {doctor.firstName + " " + doctor.lastName}
                  </option>
                ))}
            </select>
          </div>

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

          <FloatingSelect
            label="Experience Level"
            options={["Junior", "Consultant", "Senior"]}
            value={experience}
            onChange={setExperience}
          />
        </div>

        <FloatingSelect
          label="Current Assignment Status"
          options={["Active", "Pending", "Inactive"]}
          value={status}
          onChange={setStatus}
          required
        />
      </div>

      <div className="max-md:mt-5">
        <button
          type="submit"
          className="px-5 py-2 text-white bg-gray-500 rounded-4xl cursor-pointer"
          disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          className="ml-2 px-4 py-2 text-white bg-red-500 rounded-4xl cursor-pointer"
          onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default DepartmentForm;
