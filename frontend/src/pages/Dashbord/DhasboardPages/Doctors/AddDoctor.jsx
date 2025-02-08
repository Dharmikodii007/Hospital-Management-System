import React, { useState } from "react";
import useFloatingLabel from "./FloatingLabel";
import {
  FloatingInput,
  FloatingInputLong,
  ImageUpload,
} from "../../../Utils/Form/FormUtils";
import { FiHome } from "react-icons/fi";
import { addDoctorData } from "../../../../Api/Api";

function AddDoctor() {
  const firstName = useFloatingLabel();
  const lastName = useFloatingLabel();
  const mobile = useFloatingLabel();
  const password = useFloatingLabel();
  const confirmPassword = useFloatingLabel();
  const designation = useFloatingLabel();
  const address = useFloatingLabel();
  const email = useFloatingLabel();
  const dob = useFloatingLabel();
  const education = useFloatingLabel();
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("mobile", mobile.value);
    formData.append("password", password.value);
    formData.append("designation", designation.value);
    formData.append("address", address.value);
    formData.append("email", email.value);
    formData.append("dob", dob.value);
    formData.append("education", education.value);
    formData.append("gender", gender);
    formData.append("department", department);
    formData.append("image", image);

    try {
      const response = await addDoctorData(formData);

      const result = await response.json();
      if (response.ok) {
        alert("Doctor added successfully!");
      } else {
        alert(result.message || "Failed to add doctor.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#232b3e] text-[#96a2b4] px-4 sm:px-7 pt-4 flex flex-wrap items-center gap-2 sm:gap-1 overflow-x-auto whitespace-nowrap">
        <span className="text-[16px] sm:text-[20px] font-semibold">
          Add Doctor &gt;
        </span>
        <span className="flex items-center gap-1 sm:gap-2">
          <FiHome className="text-[16px] sm:text-[18px]" />
          <span className="hidden sm:inline">&gt;</span>
        </span>
        <span className="hidden sm:inline">Doctors &gt;</span>
        <span>Add Doctor</span>
      </div>

      <div className="bg-[#232b3e] shadow-lg p-5 rounded-lg">
        <form
          className="bg-[#1a202e] md:p-4 max-md:p-3 rounded-2xl"
          onSubmit={handleSubmit}>
          <h1 className="text-[17px] text-[#96a2b4] font-semibold">
            Add Doctor
          </h1>

          <div className="p-4 max-md:p-2 gap-7 max-md:gap-4 flex flex-col mt-4">
            {/* Name Fields */}
            <div className="flex max-md:flex-col gap-6 w-full">
              <FloatingInput
                label="First Name*"
                {...firstName}
              />
              <FloatingInput
                label="Last Name*"
                {...lastName}
              />
            </div>

            {/* Gender & Mobile */}
            <div className="flex gap-6 w-full max-md:flex-col">
              <div className="mt-5 relative w-full">
                <label className="absolute left-3 px-2 text-[#96a2b4] bg-[#1a202e] transition-all top-[-10px] text-[12px]">
                  Gender*
                </label>
                <select
                  className="w-full border border-[#96a2b4]/50 rounded px-4 py-4 bg-transparent text-white outline-none focus:border-white"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}>
                  <option
                    value=""
                    disabled
                    className="bg-[#1a202e]">
                    Select Gender
                  </option>
                  <option
                    value="Male"
                    className="bg-[#1a202e]">
                    Male
                  </option>
                  <option
                    value="Female"
                    className="bg-[#1a202e]">
                    Female
                  </option>
                  <option
                    value="Other"
                    className="bg-[#1a202e]">
                    Other
                  </option>
                </select>
              </div>

              <FloatingInput
                label="Mobile*"
                {...mobile}
              />
            </div>

            {/* Password & Confirm Password */}
            <div className="flex gap-6 w-full max-md:flex-col">
              <FloatingInput
                label="Password*"
                type="password"
                {...password}
              />
              <FloatingInput
                label="Re-enter Password*"
                type="password"
                {...confirmPassword}
              />
            </div>

            {/* Designation & Department */}
            <div className="flex gap-6 w-full max-md:flex-col">
              <FloatingInput
                label="Designation*"
                {...designation}
              />
              <div className="mt-5 relative w-full">
                <label className="absolute left-3 px-2 text-[#96a2b4] bg-[#1a202e] transition-all top-[-10px] text-[12px]">
                  Select Department*
                </label>
                <select
                  className="w-full border border-[#96a2b4]/50 rounded px-4 py-4 bg-transparent text-white outline-none focus:border-white"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}>
                  <option
                    value=""
                    disabled
                    className="bg-[#1a202e]">
                    Select Department
                  </option>

                  <option
                    value="Neurology"
                    className="bg-[#1a202e]">
                    Neurology
                  </option>
                  <option
                    value="Orthopedics"
                    className="bg-[#1a202e]">
                    Orthopedics
                  </option>
                  <option
                    value="Orthopedics"
                    className="bg-[#1a202e]">
                    Gynaecology
                  </option>
                  <option
                    value="Orthopedics"
                    className="bg-[#1a202e]">
                    Microbiology
                  </option>
                </select>
              </div>
            </div>

            {/* Address */}
            <FloatingInputLong
              label="Address*"
              {...address}
            />

            {/* DOB & Email */}
            <div className="flex gap-6 w-full max-md:flex-col">
              <FloatingInput
                label="Email*"
                type="email"
                {...email}
              />
              <FloatingInput
                label="Date of Birth*"
                type="date"
                {...dob}
              />
            </div>

            {/* Education */}
            <FloatingInputLong
              label="Education*"
              {...education}
            />

            {/* Upload Image */}
            <div className="relative w-full">
              <label className="absolute left-3 px-2 text-[#96a2b4] bg-[#1a202e] transition-all top-[-10px] text-[12px]">
                Upload Image*
              </label>
              <ImageUpload onUpload={handleImageUpload} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#795548] text-white px-6 py-3 rounded hover:bg-blue-700 transition-all mt-4"
              disabled={loading}>
              {loading ? "Submitting..." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddDoctor;
