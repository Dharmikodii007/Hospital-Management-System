import useFloatingLabel from "../../pages/Dashbord/Pages/Doctors/AddDoctor/FloatingLabel"; // Adjust path as needed

const useFloatingLabels = (fields) => {
  return fields.reduce((acc, field) => {
    acc[field] = useFloatingLabel();
    return acc;
  }, {});
};

export default useFloatingLabels;
