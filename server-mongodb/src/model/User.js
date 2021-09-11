const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  dateCreate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UserSchema);
