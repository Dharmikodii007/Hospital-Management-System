const express = require("express");
const db = require("./models/index");
const adminRouter = require("./routes/adminRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "20mb" }));
app.use(cors());

app.use("/api", doctorRouter, adminRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
