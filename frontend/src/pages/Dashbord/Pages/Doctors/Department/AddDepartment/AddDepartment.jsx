import React from "react";
import useFetchData from "../../../../../../hooks/useFetchData.jsx";
import { AllDoctorData } from "../../../../../../Api/DoctorApi.jsx";
import useDepartmentFormState from "../../../../../../hooks/formhooks/FormFields/Department/useDepartmentFormState.jsx";
import useDepartmentFormFields from "../../../../../../hooks/formhooks/InputFields/useDeprartmentFormFields.jsx";
import useDepartmentFormSubmit from "../../../../../../hooks/formhooks/FormFields/Department/useDepartmentSubmitForm.jsx";
import DepartmentForm from "./DepartmentForm/DepartmentForm.jsx";

function AddDepartmentModal({ onClose, reload }) {
  const floatingLabels = useDepartmentFormFields();
  const { handleSubmit, loading } = useDepartmentFormSubmit();

  const { specialty, assignedDate, schedule } = floatingLabels;
  const {
    department,
    setDepartment,
    experience,
    setExperience,
    status,
    setStatus,
    selectedDoctorId,
    setSelectedDoctorId,
  } = useDepartmentFormState();

  const {
    data: Doctor,
    loading: doctorLoading,
    error,
  } = useFetchData(AllDoctorData);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      doctor_id: selectedDoctorId,
      department,
      specialty: specialty.value,
      assignedDate: assignedDate.value,
      schedule: schedule.value,
      experience,
      status,
    };

    console.log(formData);

    await handleSubmit(formData);
    reload();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex md:items-center justify-center p-4 overflow-x-auto h-full">
      <div className="bg-[#0c0f18] p-6 rounded-lg w-full overflow-x-auto md:max-w-[60%]">
        <h2 className="text-white text-xl font-semibold mb-2">
          Add Department
        </h2>
        <DepartmentForm
          onClose={onClose}
          floatingLabels={floatingLabels}
          submitForm={submitForm}
          loading={loading}
          doctors={Doctor}
          doctorLoading={doctorLoading}
          selectedDoctorId={selectedDoctorId}
          setSelectedDoctorId={setSelectedDoctorId}
          department={department}
          setDepartment={setDepartment}
          experience={experience}
          setExperience={setExperience}
          status={status}
          setStatus={setStatus}
        />
      </div>
    </div>
  );
}

export default AddDepartmentModal;
