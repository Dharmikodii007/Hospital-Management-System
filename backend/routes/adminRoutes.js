const express = require("express");
const adminRouter = express();
const adminController = require("../controllers/adminControler");

adminRouter.post("/admin", adminController.getAdmin);

module.exports = adminRouter;
