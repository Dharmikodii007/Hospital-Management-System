const express = require("express");
const doctorRouter = express();
const doctorController = require("../controllers/doctorController");
const { authenticateToken } = require("../middleware/Auth");

doctorRouter.post("/doctor", authenticateToken, doctorController.addDoctor);
doctorRouter.get("/doctor", authenticateToken, doctorController.getAllDoctor);
doctorRouter.put("/doctor/:id", doctorController.updateDoctor);
doctorRouter.get("/doctor/:id", doctorController.getDoctorById);
doctorRouter.delete(
  "/doctor/:id",
  authenticateToken,
  doctorController.dltDoctorById
);
doctorRouter.post("/doctor/login", doctorController.loginDoctor);

module.exports = doctorRouter;
