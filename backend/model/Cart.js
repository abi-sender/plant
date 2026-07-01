import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    name: {
      type: String,
    },

    image: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    qty: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cart", cartSchema);