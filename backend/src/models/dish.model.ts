import mongoose, { Schema } from "mongoose";

export type DishDocument = {
  foodName: string;
  price: number;
  images: string[];
  description: string;
  categoryId: mongoose.Types.ObjectId;
};

const dishSchema = new mongoose.Schema<DishDocument>(
  {
    foodName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const DishModel =
  mongoose.models.Dish || mongoose.model<DishDocument>("Dish", dishSchema);
