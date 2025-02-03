const db = require("../models/index");
const { where } = require("sequelize");
const bcrypt = require("bcryptjs");
const Doctor = db.Doctor;

const doctorServices = {
  addDoctorService: async (
    firstName,
    lastName,
    gender,
    mobile,
    password,
    designation,
    department,
    address,
    email,
    birth,
    education,
    doctorimg
  ) => {
    if (
      !firstName ||
      !password ||
      !gender ||
      !mobile ||
      !department ||
      !email ||
      !doctorimg
    ) {
      throw new Error("All required fields must be provided!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctorData = await Doctor.create({
      firstName,
      lastName,
      gender,
      mobile,
      password: hashedPassword,
      designation,
      department,
      address,
      email,
      birth,
      education,
      doctorimg,
    });

    return doctorData;
  },

  getAllDoctorService: async () => {
    const allDoctor = await Doctor.findAll();

    if (!allDoctor) {
      throw new Error("all Doctor is not get");
    }

    return allDoctor;
  },

  updateDoctorService: async (id, doctorData) => {
    const existingDoctor = await Doctor.findOne({ where: { id } });

    if (!existingDoctor) {
      throw new Error("Doctor Not Exits!");
    }

    await existingDoctor.update(doctorData);

    return existingDoctor;
  },

  getDoctorByIdService: async (id) => {
    const doctorData = await Doctor.findOne({ where: { id } });

    return doctorData;
  },

  loginDoctorService: async (email, password) => {
    const existingDoctor = await Doctor.findOne({ where: { email } });

    if (!existingDoctor) {
      throw new Error("Doctor does not exist!");
    }

    const passwordMatch = await bcrypt.compare(
      password,
      existingDoctor.password
    );

    if (!passwordMatch) {
      throw new Error("Incorrect email or password!");
    }

    return existingDoctor;
  },
};

module.exports = doctorServices;
