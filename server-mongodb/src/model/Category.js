const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model("Category", CategorySchema, "categories");
