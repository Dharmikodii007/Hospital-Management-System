import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";

function DepartmentTable({ doctors, deleteDepartment, updateDepartment }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#1a202e] text-[#96a2b4] text-sm">
        <thead className="bg-[#1a202e] border-b-[0.5px] border-[#96a2b4] hidden md:table-header-group">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-2 text-left">Department</th>
            <th className="p-2 text-left">Specialty</th>
            <th className="p-2 text-left">Shift Schedule</th>
            <th className="p-2 text-left">Experience Level</th>
            <th className="p-2 text-left">Assignment Status</th>
            <th className="p-2 text-left">Assignment Date</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="border-b-[0.5px] border-[#96a2b4]">
          {doctors.length > 0 ? (
            doctors.map((doctor) =>
              doctor?.Department ? (
                <tr
                  key={doctor.id}
                  className="hover:bg-gray-600 transition hidden md:table-row">
                  <td className="p-4 flex gap-2 items-center">
                    <img
                      src={doctor.doctorimg}
                      className="w-[30px] h-[30px] rounded-full"
                      alt="Doctor"
                    />
                    {doctor.Department.doctorName || "Doctor"}
                  </td>
                  <td className="p-2">{doctor.Department.department}</td>
                  <td className="p-2">{doctor.Department.specialty}</td>
                  <td className="p-2">{doctor.Department.schedule}</td>
                  <td className="p-2">{doctor.Department.experience}</td>
                  <td className="p-2">{doctor.Department.status}</td>
                  <td className="p-2">
                    {doctor.Department.assignedDate
                      ? format(
                          new Date(doctor.Department.assignedDate),
                          "dd-MM-yyyy"
                        )
                      : "N/A"}
                  </td>
                  <td className="p-2 flex gap-3">
                    <FaRegEdit
                      className="text-blue-400 cursor-pointer hover:text-blue-500"
                      size={22}
                      onClick={() => updateDepartment(doctor.Department.id)}
                    />
                    <MdDelete
                      className="text-red-400 cursor-pointer hover:text-red-500"
                      size={22}
                      onClick={() => deleteDepartment(doctor.Department.id)}
                    />
                  </td>
                </tr>
              ) : null
            )
          ) : (
            <tr>
              <td
                colSpan="8"
                className="text-center p-4">
                No doctors found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentTable;
