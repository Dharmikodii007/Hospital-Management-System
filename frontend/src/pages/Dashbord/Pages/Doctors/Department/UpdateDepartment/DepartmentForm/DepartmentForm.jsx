import React from "react";
import { FloatingInput } from "../../../../../../Utils/Form/FormUtils.jsx";
import FloatingSelect from "../../../../../../Utils/Form/FloatingSelect.jsx";

function DepartmentForm({
  floatingLabels,
  department,
  setDepartment,
  experience,
  setExperience,
  status,
  setStatus,
  handleSubmit,
  onClose,
}) {
  const today = new Date().toISOString().split("T")[0];
  const { specialty, assignedDate, schedule } = floatingLabels;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0c0f18] flex flex-col md:gap-5">
      <div>
        <div className="flex max-md:flex-col md:gap-6 w-full">
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
        <div className="flex max-md:flex-col gap-6 w-full mt-6">
          <FloatingSelect
            label="Current Assignment Status"
            options={["Active", "Pending", "Inactive"]}
            value={status}
            onChange={setStatus}
          />
        </div>
      </div>
      <div className="max-md:mt-5">
        <button
          type="b"
          className="px-5 py-2 text-white bg-gray-500 rounded-4xl cursor-pointer">
          Save
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
