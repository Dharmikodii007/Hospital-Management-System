const db = require("../models/index");
const cloudinary = require("../cloudinary/cloudinary");
const Patient = db.Patient;

const patientServices = {
  addPatientService: async (patientData) => {
    const existingPatient = await Patient.findOne({
      where: { email: patientData.email },
    });

    if (existingPatient) {
      return { success: false, message: "Email Already Exit!" };
    }

    const cloudinary_url = await cloudinary.uploader.upload(
      patientData.patientImg,
      {
        folder: "/PatientImage",
      }
    );

    FormData.patientImg = cloudinary_url.secure_url;

    const response = Patient.create(patientData);

    return response;
  },

  getAllPatientService: async () => {
    const patientData = await Patient.findAll();

    return patientData;
  },

  getPatientByIdService: async (id) => {
    const patientData = await Patient.findOne({ where: { id: id } });

    return patientData;
  },

  deletePatientByIdService: async (id) => {
    const existingPatient = await Patient.findOne({ where: { id: id } });

    if (!existingPatient) {
      return { success: false, message: "Patient not found!" };
    }

    await Patient.destroy({ where: { id: id } });

    return { success: true, message: "Patient deleted successfully!" };
  },

  updatePatientService: async (id, patientData) => {
    const existingPatient = await Patient.findOne({ where: { id: id } });

    if (!existingPatient) {
      return { success: false, message: "Patient not found!" };
    }

    const response = await existingPatient.update(patientData);

    return response;
  },
};

module.exports = patientServices;
