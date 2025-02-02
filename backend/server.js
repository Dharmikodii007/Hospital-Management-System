const express = require("express");
const db = require("./models/index");
const adminRouter = require("./routes/adminRoutes");

const app = express();
app.use(express.json());
app.use("/api", adminRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
