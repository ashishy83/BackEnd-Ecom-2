const mongoose = require("mongoose");
const Product = require("./ProductModel");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    cart: [{
      product:{type: mongoose.Schema.Types.ObjectId, ref: Product},
      quantity: Number,
    }],
    
    
    // userID: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user", // ref to User model
    //   required: [true, "User ID is required"],
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
