// handleDownloadExcel.js
import { format } from "date-fns";
import * as XLSX from "xlsx";

const handleDownloadExcel = (Doctors) => {
  if (!Doctors || Doctors.length === 0) {
    console.error("No doctor data available for download.");
    return;
  }

  const excelData = Doctors.map((doctor) => {
    if (doctor?.Department) {
      return {
        "Doctor Name": doctor.Department.doctorName || "N/A",
        Department: doctor.Department.department || "N/A",
        Specialty: doctor.Department.specialty || "N/A",
        "Shift Schedule": doctor.Department.schedule || "N/A",
        "Experience Level": doctor.Department.experience || "N/A",
        "Assignment Status": doctor.Department.status || "N/A",
        "Assignment Date": doctor.Department.assignedDate
          ? format(new Date(doctor.Department.assignedDate), "dd-MM-yyyy")
          : "N/A",
      };
    }
    return null;
  }).filter((doctor) => doctor !== null);

  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const headerStyle = {
    font: { bold: true, color: { rgb: "FFFFFF" } },
    fill: { fgColor: { rgb: "4F81BD" } },
    alignment: { horizontal: "center" },
  };

  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  for (let C = range.s.c; C <= range.e.c; C++) {
    const cell = XLSX.utils.encode_cell({ r: 0, c: C });
    if (!worksheet[cell]) continue;
    worksheet[cell].s = headerStyle;
  }

  worksheet["!cols"] = Object.keys(excelData[0]).map(() => ({ wch: 20 }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Department Doctors");
  XLSX.writeFile(workbook, "Department_Doctors.xlsx");
};

export default handleDownloadExcel;
