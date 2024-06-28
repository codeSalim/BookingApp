const mongoose = require("mongoose");
require("dotenv").config();
const dbconnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB CONNECTION DONE !!!,");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbconnect;
