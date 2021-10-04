const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    Category: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Category",
    },

    Wishlist: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Wishlist",
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema, "products");
