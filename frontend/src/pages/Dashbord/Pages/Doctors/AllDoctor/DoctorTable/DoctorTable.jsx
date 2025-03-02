import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import DeleteButton from "../../../../../../component/Table/DeleteButton";
import TableHeader from "../../../../../../component/Table/TableHeader";
import TableCell from "../../../../../../component/Table/TableCell";
import TableCellWithIcon from "../../../../../../component/Table/TableCellWithIcon";
import { format } from "date-fns";

function DoctorTable({ doctors, deleteDoctor }) {
  const columns = [
    "Name",
    "Department",
    "Designation",
    "Gender",
    "Mobile No.",
    "Address",
    "Education",
    "DOB",
    "Actions",
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] bg-[#1a202e] text-[#96a2b4] text-sm">
        <TableHeader columns={columns} />

        <tbody className="border-b-[0.5px] border-[#96a2b4] text-[#96a2b4]">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="hover:bg-gray-600 transition">
                <TableCell className="p-4 flex gap-2 items-center">
                  <img
                    src={doctor.doctorimg}
                    className="w-[30px] h-[30px] rounded-full"
                    alt="Doctor"
                  />
                  {doctor.firstName || "Doctor"}
                </TableCell>
                <TableCell>{doctor.department}</TableCell>
                <TableCell>{doctor.designation}</TableCell>
                <TableCell>{doctor.gender}</TableCell>
                <TableCell>{doctor.mobile || "N/A"}</TableCell>
                <TableCell>{doctor.address || "N/A"}</TableCell>
                <TableCell>{doctor.education || "N/A"}</TableCell>
                <TableCellWithIcon
                  Icon={MdOutlineDateRange}
                  text={
                    doctor.birth
                      ? format(new Date(doctor?.birth), "dd-MM-yyyy")
                      : "N/A"
                  }
                  iconClass="text-[#795548]"
                />
                <TableCell>
                  <DeleteButton onClick={() => deleteDoctor(doctor.id)} />
                </TableCell>
              </tr>
            ))
          ) : (
            <tr>
              <TableCell
                colSpan="9"
                className="text-center p-4">
                No doctors found.
              </TableCell>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorTable;
