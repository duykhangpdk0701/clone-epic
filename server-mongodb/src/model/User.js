const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    wishlists: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Wishlist",
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema, "users");
