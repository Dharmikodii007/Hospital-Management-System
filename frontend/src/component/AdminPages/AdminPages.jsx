import React from "react";
import AddDoctor from "../../pages/Dashbord/Pages/Doctors/AddDoctor/AddDoctor";
import AllDoctor from "../../pages/Dashbord/Pages/Doctors/AllDoctor/AllDoctor";
import DepartmentDoctor from "../../pages/Dashbord/Pages/Doctors/Department/Department";
import Shift from "../../pages/Dashbord/Pages/Doctors/ShiftManagement/shift";
import EditDoctor from "../../pages/Dashbord/Pages/Doctors/EditDoctor/EditDoctor";
import AllPatient from "../../pages/Dashbord/Pages/Patients/AllPatients/AllPatient";
import AddPatient from "../../pages/Dashbord/Pages/Patients/AddPatient/AddPatient";
import EditPatient from "../../pages/Dashbord/Pages/Patients/EditPatients/EditPatients";
import BookAppointment from "../../pages/Dashbord/Pages/Appointment/BookAppointment/BookAppointment";
import ViewAppointment from "../../pages/Dashbord/Pages/Appointment/ViewAppointment/AllAppointment";
import AdminDashboard from "../../pages/Dashbord/Pages/Dashboard/AdminDashboard";

const pages = {
  AddDoctor: <AddDoctor />,
  AllDoctor: <AllDoctor />,
  DoctorDepartment: <DepartmentDoctor />,
  ShiftManagement: <Shift />,
  EditDoctor: <EditDoctor />,
  AllPatients: <AllPatient />,
  AddPatients: <AddPatient />,
  EditPatients: <EditPatient />,
  BookAppoinment: <BookAppointment />,
  ViewAppoinment: <ViewAppointment />,
  Dashboard: <AdminDashboard />,
};

export default pages;
