const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      index: true,
    },

    subCategory: {
      type: String,
      index: true,
    },

    brand: {
      type: String,
      required: true,
      index: true,
    },

    price: {
      type: Number,
      required: true,
      index: true,
    },

    images: [
      {
        type: String,
      },
    ],

    attributes: {
      color: [String],
      size: [String],
      material: String,
      weight: String,
    },

    tags: [String],

    rating: {
      average: {
        type: Number,
        default: 0,
      },

      totalReviews: {
        type: Number,
        default: 0,
      },
    },

    seller: {
      id: String,
      name: String,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);