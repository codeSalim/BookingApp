const mongoose = require("mongoose");

const servicesSchema = new mongoose(
  {
    services: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const services = mongoose.model("services", servicesSchemaa);
