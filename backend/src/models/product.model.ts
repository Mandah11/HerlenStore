import mongoose, { Schema } from "mongoose";

export type ProductDocument = {
  productName: string;
  price: number;
  images: string[];
  description: string;
  category: mongoose.Types.ObjectId;
};
const ProductSchema = new mongoose.Schema<ProductDocument>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: (value: string[]) => value.length >= 3 && value.length <= 4,
      message: "Product must have between 3 and 4 images.",
    },
  },
  description: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
export const ProductModel = mongoose.model("Product", ProductSchema);
