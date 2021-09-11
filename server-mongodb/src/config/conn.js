const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.CONN, () => {
  console.log("connected to DB");
});

module.exports = mongoose;
