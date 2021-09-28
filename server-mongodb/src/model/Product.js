const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema, "products");
