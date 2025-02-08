import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaPollHSolid } from "react-icons/lia";
import { FaUserDoctor, FaPeopleRoof } from "react-icons/fa6";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";

export const SideBarData = [
  {
    logo: <MdOutlineSpaceDashboard />,
    name: "Dashboard",

    category: [{ name: "Dashboard 1", pagename: "Dashboard" }],
  },
  {
    logo: <LiaPollHSolid />,
    name: "Appointments",
    category: [
      { name: "Appointment Calendar", pagename: "AppoinmentCalendar" },
      { name: "View Appointment", pagename: "ViewAppoinment" },
      { name: "Book Appointment", pagename: "BookAppoinment" },
      { name: "Edit Appointment", pagename: "EditAppoinment" },
    ],
  },
  {
    logo: <FaUserDoctor />,
    name: "Doctors",
    category: [
      { name: "All Doctors", pagename: "AllDoctor" },
      { name: "Add Doctors", pagename: "AddDoctor" },
      { name: "Edit Doctors", pagename: "EditDoctor" },
      { name: "Doctors Profile", pagename: "ProfileDoctor" },
    ],
  },
  {
    logo: <FaPeopleRoof />,
    name: "Staff",
    category: [
      { name: "All Staff", pagename: "" },
      { name: "Add Staff", pagename: "" },
      { name: "Edit Staff", pagename: "" },
      { name: "Staff Profile", pagename: "" },
    ],
  },
  {
    logo: <FaUserInjured />,
    name: "Patients",
    category: [
      { name: "All Patients", pagename: "" },
      { name: "Add Patients", pagename: "" },
      { name: "Edit Patients", pagename: "" },
      { name: "Patients Profile", pagename: "" },
    ],
  },
  {
    logo: <MdOutlineLocalPharmacy />,
    name: "Pharmacy",
    category: [
      { name: "Medicine List", pagename: "" },
      { name: "Add Medicine", pagename: "" },
    ],
  },
];
