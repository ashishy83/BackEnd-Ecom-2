const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, maxlength: 30 },
    category: { type: String, required: true },
    name: { type: String, required: true, maxlength: 30 },
    rating: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    oPrice: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
