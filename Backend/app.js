const express = require("express");
const dbconnect = require("./config/db");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/userRoute"));
dbconnect();
app.listen(process.env.PORT, () => {
  console.log(`Server Is Runing On Port ${process.env.PORT}`);
});
