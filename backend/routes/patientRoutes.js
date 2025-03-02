const express = require("express");
const patientRouter = express();
const patientController = require("../controllers/patientController");
const { authenticateToken } = require("../middleware/Auth");

patientRouter.post("/patient", authenticateToken, patientController.addPatient);
patientRouter.get(
  "/patient",
  authenticateToken,
  patientController.getAllPatient
);
patientRouter.get(
  "/patient/:id",
  authenticateToken,
  patientController.getPatientById
);
patientRouter.delete(
  "/patient/:id",
  authenticateToken,
  patientController.deletePatientById
);
patientRouter.put(
  "/patient/:id",
  authenticateToken,
  patientController.updatePatient
);

module.exports = patientRouter;
