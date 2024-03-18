import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // category: {
    //   type: mongoose.ObjectId,
    //   ref: "Category",
    // },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
        type: String,
        required: true,

    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);