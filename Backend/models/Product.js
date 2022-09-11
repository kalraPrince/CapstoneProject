const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, },
    images: { type: String, required: true },
    category: { type: String, required: true},
    price: { type: Number, required: true },
    discountPercentage: {type:Number, required: true},
    rating: {type:Number, required: true},
    stock: {type:Number, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
