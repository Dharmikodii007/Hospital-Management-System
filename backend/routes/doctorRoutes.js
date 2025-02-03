const express = require("express");
const doctorRouter = express();
const doctorController = require("../controllers/doctorController");

doctorRouter.post("/doctor", doctorController.addDoctor);
doctorRouter.get("/doctor", doctorController.getAllDoctor);
doctorRouter.put("/doctor/:id", doctorController.updateDoctor);
doctorRouter.get("/doctor/:id", doctorController.getDoctorById);
doctorRouter.post("/doctor/login", doctorController.loginDoctor);

module.exports = doctorRouter;
