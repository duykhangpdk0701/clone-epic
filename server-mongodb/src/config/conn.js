const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
